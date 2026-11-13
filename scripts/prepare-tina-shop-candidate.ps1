$ErrorActionPreference = 'Stop'
throw 'Script histórico de tema/Shop: lista y SDK congelados. Usar .agents/skills/portfolio-editorial/references/operacion.md y candidato explícito; no reutilizar como rutina editorial.'
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$candidateRoot = Join-Path $env:TEMP ('al3design-tina-shop-' + (Get-Date -Format 'yyyyMMdd-HHmmss'))
$candidateSite = Join-Path $candidateRoot 'site'
New-Item -ItemType Directory -Path $candidateSite -Force | Out-Null
$baseHead = (& git -C $repoRoot rev-parse HEAD).Trim()
if ($LASTEXITCODE -ne 0) { throw 'Could not resolve HEAD' }
$archivePath = Join-Path $candidateRoot 'head.zip'
& git -C $repoRoot archive --format=zip "--output=$archivePath" HEAD
if ($LASTEXITCODE -ne 0) { throw 'Could not archive HEAD' }
Expand-Archive -LiteralPath $archivePath -DestinationPath $candidateSite

# Approved runtime scope only. No dirty-tree copy, branch or worktree.
$selected = @(
  'package.json', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'tsconfig.json', 'astro.config.mjs',
  'tina/config.ts', 'tina/shop-products.ts', 'tina/shop-catalogue.ts', 'tina/tina-lock.json',
  'tina/dashboard/PortfolioDashboard.tsx',
  'src/lib/admin-theme.ts', 'src/lib/shop-editor-route.ts', 'src/lib/shop-media-paths.mjs',
  'src/lib/shop-catalogue.ts', 'src/lib/shop-review.ts', 'src/types/shop-catalogue.d.ts',
  'src/data/shop-release.ts', 'src/editorial/shop-catalogue/catalogue.json',
  'src/components/ShopShare.astro', 'src/components/ShopWhatsAppLink.astro',
  'src/components/ShopWhatsAppButton.tsx', 'src/components/ShopPaletteView.tsx',
  'src/components/ShopProductView.tsx', 'src/components/ShopProductLivePreview.tsx',
  'src/styles/components/ShopWhatsAppButton.module.scss',
  'src/layouts/MainLayout.astro', 'src/layouts/ShopCatalogue.astro', 'src/layouts/ShopLanding.astro',
  'src/editorial/ShopReview.astro', 'src/editorial/ShopPalette.astro',
  'src/pages/revision/proyectos/[...slug].astro', 'src/pages/revision/[language]/[slug].astro',
  'src/pages/revision/media/[file].ts',
  'scripts/lib/shop-catalogue-plugin.mjs', 'scripts/lib/shop-catalogue-selection.mjs',
  'scripts/prepare-admin-theme-assets.mjs', 'scripts/verify-shop-catalogue-artifact.mjs',
  'tests/shop-catalogue-selection.test.mjs', 'tests/fixtures/shop-selection.ts',
  'tests/e2e/shop.e2e.ts', 'tests/e2e/shop-review.e2e.ts'
)
$themeRoot = Join-Path $repoRoot 'public/admin-theme'
$selected += Get-ChildItem -LiteralPath $themeRoot -Recurse -File | ForEach-Object {
  [IO.Path]::GetRelativePath($repoRoot, $_.FullName).Replace('\', '/')
}
$catalogue = Get-Content -LiteralPath (Join-Path $repoRoot 'src/editorial/shop-catalogue/catalogue.json') -Raw | ConvertFrom-Json
$pieces = @($catalogue.products | ForEach-Object { $_.product })
foreach ($documentPath in $pieces) {
  if ($documentPath -notmatch '^src/editorial/shop-products/[a-z0-9]+(?:-[a-z0-9]+)*\.json$') { throw 'Invalid selected product path' }
  $selected += $documentPath
  $document = Get-Content -LiteralPath (Join-Path $repoRoot $documentPath) -Raw | ConvertFrom-Json
  foreach ($photo in $document.photos) {
    if ($photo.image -match '^/assets/shop/[a-zA-Z0-9/_-]+\.(jpg|jpeg|png|webp)$') {
      $selected += 'public' + $photo.image
    } elseif ($photo.sourcePath -match '^src/editorial/shop-assets/intake-\d{4}-\d{2}-\d{2}/[a-zA-Z0-9_-]+\.jpg$') {
      $selected += $photo.sourcePath
    } else { throw "Invalid selected photograph in $documentPath" }
  }
}
$selected = @($selected | Sort-Object -Unique)
$overlay = foreach ($file in $selected) {
  $source = Join-Path $repoRoot $file
  $destination = Join-Path $candidateSite $file
  New-Item -ItemType Directory -Path (Split-Path $destination -Parent) -Force | Out-Null
  Copy-Item -LiteralPath $source -Destination $destination
  [ordered]@{ path = $file; sha256 = (Get-FileHash -LiteralPath $destination -Algorithm SHA256).Hash }
}

# Local-build support only. Reuse the already generated SDK and running Tina.
# These generated files are not part of the publication overlay.
$sdkFiles = @('client.ts', 'types.ts', 'types.js')
$sdk = foreach ($file in $sdkFiles) {
  $source = Join-Path $repoRoot "tina/__generated__/$file"
  $destination = Join-Path $candidateSite "tina/__generated__/$file"
  New-Item -ItemType Directory -Path (Split-Path $destination -Parent) -Force | Out-Null
  Copy-Item -LiteralPath $source -Destination $destination
  [ordered]@{ path = "tina/__generated__/$file"; sha256 = (Get-FileHash -LiteralPath $destination -Algorithm SHA256).Hash }
}
New-Item -ItemType Junction -Path (Join-Path $candidateSite 'node_modules') -Target (Join-Path $repoRoot 'node_modules') | Out-Null
$manifest = [ordered]@{
  preparedAt = (Get-Date).ToUniversalTime().ToString('o')
  baseHead = $baseHead
  branch = (& git -C $repoRoot branch --show-current).Trim()
  site = $candidateSite
  scope = 'Tina theme/upgrade and explicit Shop selection; local Astro build only'
  deployable = $false
  files = @($overlay)
  localOnlyGeneratedSdk = @($sdk)
  localOnlyDependencies = 'junction to existing node_modules; no installation in candidate'
  buildCommand = 'npm.cmd exec -- astro build'
  remaining = @('Tina Cloud build with correct environment/schema', 'Preview approval and remote artifact validation', 'peer dependency review')
}
$manifestPath = Join-Path $candidateRoot 'manifest.json'
$manifest | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $manifestPath -Encoding utf8
Write-Output ([ordered]@{ site = $candidateSite; manifest = $manifestPath; overlayFiles = $selected.Count; baseHead = $baseHead } | ConvertTo-Json -Compress)
