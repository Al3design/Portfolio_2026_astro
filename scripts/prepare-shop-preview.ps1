$ErrorActionPreference = 'Stop'
throw 'Script histórico R38: lista congelada de ocho piezas. Usar .agents/skills/portfolio-editorial/references/operacion.md y recorrido.mjs prepare --files; no prepara candidatos vigentes.'
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$candidateRoot = Join-Path $env:TEMP ('al3design-shop-preview-r38-' + (Get-Date -Format 'yyyyMMdd-HHmmss'))
$candidateSite = Join-Path $candidateRoot 'site'
$archivePath = Join-Path $candidateRoot 'head.zip'
New-Item -ItemType Directory -Path $candidateSite -Force | Out-Null
$baseHead = (& git -C $repoRoot rev-parse HEAD).Trim()
if ($LASTEXITCODE -ne 0) { throw 'Could not resolve HEAD' }
& git -C $repoRoot archive --format=zip "--output=$archivePath" HEAD
if ($LASTEXITCODE -ne 0) { throw 'Could not archive HEAD' }
Expand-Archive -LiteralPath $archivePath -DestinationPath $candidateSite

# Exact shop runtime/support selection; never copy the whole dirty checkout.
$selected = @(
  'astro.config.mjs',
  'src/components/Navigation.tsx', 'src/components/ShopContent.tsx',
  'src/data/shop-demo.ts', 'src/data/shop-experience.ts',
  'src/data/bambu-filaments.json', 'src/data/shop-release.ts',
  'src/layouts/MainLayout.astro', 'src/layouts/ShopPage.astro', 'src/layouts/ShopCatalogue.astro',
  'src/styles/pages/_shop.module.scss', 'src/styles/pages/_shop-review.module.scss',
  'src/lib/shop-colours.ts', 'src/lib/shop-editorial.ts', 'src/lib/shop-inquiry.ts',
  'src/lib/shop-review.ts', 'src/lib/shop-catalogue.ts',
  'src/editorial/ShopReview.astro', 'src/editorial/ShopPalette.astro', 'src/editorial/shop-media.ts',
  'src/pages/tienda/[slug].astro', 'src/pages/en/shop-3d/[slug].astro',
  'tina/config.ts', 'tina/shop-products.ts', 'tina/tina-lock.json',
  'scripts/verify-shop-catalogue-artifact.mjs',
  'scripts/sync-bambu-filaments.mjs', 'scripts/sync-bambu-pla-lite.mjs'
)
$selectionText = Get-Content -LiteralPath (Join-Path $repoRoot 'src/data/shop-release.ts') -Raw
$slugs = [regex]::Matches($selectionText, "'([a-z][a-z0-9-]+)'") | ForEach-Object { $_.Groups[1].Value }
if ($slugs.Count -ne 8) { throw 'Expected the reviewed selection of eight shop pieces' }
foreach ($slug in $slugs) {
  $documentPath = "src/editorial/shop-products/$slug.json"
  $selected += $documentPath
  $document = Get-Content -LiteralPath (Join-Path $repoRoot $documentPath) -Raw | ConvertFrom-Json
  foreach ($photo in $document.photos) {
    if ($photo.sourcePath -notmatch '^src/editorial/shop-assets/intake-\d{4}-\d{2}-\d{2}/[a-zA-Z0-9_-]+\.jpg$') {
      throw "Invalid selected photo for $slug"
    }
    $selected += $photo.sourcePath
  }
}
$selected = @($selected | Sort-Object -Unique)
$overlay = foreach ($path in $selected) {
  $sourcePath = Join-Path $repoRoot $path
  $destination = Join-Path $candidateSite $path
  New-Item -ItemType Directory -Path (Split-Path $destination -Parent) -Force | Out-Null
  Copy-Item -LiteralPath $sourcePath -Destination $destination
  [ordered]@{ path = $path; sha256 = (Get-FileHash -LiteralPath $destination -Algorithm SHA256).Hash }
}

# Configure the already verified project explicitly. No link, deploy or env pull.
New-Item -ItemType Directory -Path (Join-Path $candidateSite '.vercel') -Force | Out-Null
@{ projectId = 'prj_OZL34bgW5q9IcOglVLpPOX748Qrt'; orgId = 'team_dKWDK276nYqP8e6q7EZvqWf3'; projectName = 'portfolio-2026-astro' } |
  ConvertTo-Json | Set-Content -LiteralPath (Join-Path $candidateSite '.vercel/project.json') -Encoding utf8
@{ framework = 'astro'; outputDirectory = 'dist'; buildCommand = 'npm run build && node scripts/verify-shop-catalogue-artifact.mjs' } |
  ConvertTo-Json | Set-Content -LiteralPath (Join-Path $candidateSite 'vercel.json') -Encoding utf8
@'
.git
.vercel
.agents
.codegraph
.claude
.codex
.continue
.playwright*
node_modules
dist
output
docs
openspec
tests
.env*
*.log
tina/__generated__
public/admin
'@ | Set-Content -LiteralPath (Join-Path $candidateSite '.vercelignore') -Encoding utf8
$manifest = [ordered]@{
  preparedAt = (Get-Date).ToUniversalTime().ToString('o')
  baseHead = $baseHead
  site = $candidateSite
  project = 'portfolio-2026-astro'
  target = 'preview (not deployed)'
  pieces = @($slugs)
  files = @($overlay)
  candidateOnlyConfig = @('vercel.json', '.vercelignore', '.vercel/project.json')
  buildCommand = 'npm run build && node scripts/verify-shop-catalogue-artifact.mjs'
}
$manifestPath = Join-Path $candidateRoot 'manifest.json'
$manifest | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $manifestPath -Encoding utf8
Write-Output ([ordered]@{ site = $candidateSite; manifest = $manifestPath; overlayFiles = $selected.Count; baseHead = $baseHead } | ConvertTo-Json -Compress)
