# ADDED Requirements

## Requirement: Explicit editable catalogue

The system SHALL derive public routes, listing, homepage and feeds from one ordered catalogue document editable in Tina. New products SHALL remain excluded until explicitly selected. Invalid, duplicated or missing references SHALL stop the build with a specific error.

### Scenario: Existing catalogue migrates

- WHEN the current catalogue is migrated
- THEN the same eight slugs, three latest pieces and hero SHALL remain selected, with unchanged ES/EN routes and conditions.

### Scenario: A draft is created

- WHEN a new unselected document is saved
- THEN its document and private photographs SHALL NOT be added to the public asset graph.

## Requirement: Connected photographs

The system SHALL use the selected image field for review, gallery, social image and RSS. Existing private source paths SHALL remain supported. Only raster images inside approved directories SHALL be accepted, including resolved symlink containment.

### Scenario: Public photo is selected

- WHEN a selected product references an uploaded `/assets/shop/` image with bilingual alt
- THEN Astro SHALL generate the normal gallery derivatives and JPEG social image without editing an import list.
- AND the editor SHALL explain that the uploaded original is public independently of catalogue selection.

### Scenario: Photo or reference is invalid

- WHEN an explicit path traverses directories, escapes through a symlink, is missing or has an unsupported type
- THEN generation SHALL fail rather than silently omit or substitute the photograph.

## Requirement: Local visual editing of a piece

The local Tina product collection SHALL route a saved document to its development-only review URL and register its query through useTina. The preview and public piece SHALL share the product template. Unsaved title, description, photo, palette and detail changes SHALL derive from Tina data without a second local state copy. Contextual annotations SHALL select their source fields.

### Scenario: Unsaved edit stays private

- WHEN an editor changes a localized title in a new unselected local draft
- THEN the preview heading SHALL update before Save
- AND the public catalogue SHALL keep its explicitly selected products
- AND the editor SHALL be able to retire the disposable draft without changing existing product files.

### Scenario: A configuration document is opened

- WHEN the editor opens the singleton catalogue selection
- THEN its native configuration form SHALL remain available
- AND it SHALL NOT be described as a live storefront preview.
