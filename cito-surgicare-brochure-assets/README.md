# CITO Surgicare brochure image assets

Extracted individual embedded product/catalogue images from the uploaded CITO Surgicare brochure.

## Contents
- `public/images/brochure/page-02/` through `page-11/`: extracted product panels from brochure pages 2–11.
- `manifest.json` and `manifest.csv`: filenames, dimensions, and suggested public paths.
- The images retain any labels/text that were embedded in the original brochure panels.

## How to use in the Vite project
Copy the contents of this `public/` directory into the `public/` directory of the CITO Surgicare React/Vite project.

For example:
`public/images/brochure/page-02/page-02-item-01.png`

Reference public assets in React with a root-relative path:
`/images/brochure/page-02/page-02-item-01.png`

Do not use `import` for files in `public/`. Keep image paths in the centralized product data file.

## Important
The image numbering follows the embedded image resource order from each brochure page. Verify the pictured product and label before assigning an image to a product record. Some panels include promotional text or labels from the brochure, so do not present them as clean standalone product photographs if that embedded text is unsuitable for the layout.
