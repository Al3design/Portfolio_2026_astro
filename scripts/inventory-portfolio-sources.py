"""Read-only metadata inventory. Never loads media or long source documents."""
import argparse
import csv
import json
import os
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('root', type=Path)
parser.add_argument('--output', type=Path, required=True)
args = parser.parse_args()
root = args.root.resolve(strict=True)
args.output.mkdir(parents=True, exist_ok=True)
excluded = {'.git', 'node_modules', '__pycache__', '.next', '.astro', '.cache'}
images = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.tif', '.tiff', '.bmp', '.svg', '.avif'}
videos = {'.mp4', '.mov', '.avi', '.mkv', '.wmv', '.webm', '.mpeg', '.mpg', '.m4v', '.flv', '.ogv', '.3gp', '.mts'}
design = {'.psd', '.ai', '.eps', '.indd', '.fig', '.xd', '.blend', '.max', '.c4d', '.obj', '.stl', '.fla', '.aep', '.prproj', '.swf'}
extensions = Counter()
groups = defaultdict(lambda: {'files': 0, 'bytes': 0, 'images': 0, 'videos': 0, 'design': 0, 'pdf': 0})
errors, skipped, root_files = [], [], []
directory_count = 0
with (args.output / 'files.csv').open('w', encoding='utf-8-sig', newline='') as stream:
    writer = csv.writer(stream)
    writer.writerow(['relative_path', 'extension', 'bytes', 'modified_utc', 'group'])
    for directory, dirs, files in os.walk(root, onerror=lambda e: errors.append(str(e)), followlinks=False):
        directory_count += 1
        for name in list(dirs):
            if name.lower() in excluded:
                skipped.append(str((Path(directory) / name).relative_to(root)))
                dirs.remove(name)
        for name in files:
            path = Path(directory) / name
            relative = path.relative_to(root)
            try:
                stat = path.stat()
            except OSError as error:
                errors.append(f'{relative}: {error}')
                continue
            extension = path.suffix.lower() or '(none)'
            group = '/'.join(relative.parts[:2]) if len(relative.parts) > 2 else relative.parts[0] if len(relative.parts) > 1 else '(root)'
            item = groups[group]
            item['files'] += 1
            item['bytes'] += stat.st_size
            for kind, matches in [('images', extension in images), ('videos', extension in videos), ('design', extension in design), ('pdf', extension == '.pdf')]:
                item[kind] += int(matches)
            extensions[extension] += 1
            writer.writerow([relative.as_posix(), extension, stat.st_size, datetime.fromtimestamp(stat.st_mtime, timezone.utc).isoformat(), group])
            if len(relative.parts) == 1:
                root_files.append({'name': name, 'bytes': stat.st_size})
summary = {'scannedAt': datetime.now(timezone.utc).isoformat(), 'sourceRoot': str(root), 'method': 'metadata only; no media/document contents read', 'directories': directory_count, 'files': sum(extensions.values()), 'extensions': dict(extensions.most_common()), 'groups': dict(sorted(groups.items())), 'rootFiles': root_files, 'excluded': skipped, 'errors': errors}
(args.output / 'summary.json').write_text(json.dumps(summary, indent=2, ensure_ascii=False), encoding='utf-8')
print(json.dumps({'directories': directory_count, 'files': summary['files'], 'topExtensions': extensions.most_common(12), 'groups': summary['groups'], 'errors': len(errors), 'excluded': len(skipped)}, ensure_ascii=False))
