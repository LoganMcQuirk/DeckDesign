# DeckDesign

DeckDesign is a client-side playing-card designer built with plain HTML, CSS and JavaScript.  
It lets users customize card backs, suit icons, corner fonts/colors, and picture-card images (J/Q/K/Joker), preview changes live, and export a printable deck as PNGs (html2canvas + JSZip + FileSaver). Designed as a learning portfolio project to demonstrate practical front‑end skills.

## Key features
- Live preview of a single card (front/back)
- Replace suit icons and picture-card images with user uploads
- Alternative of preset images and preset styles
- Mirror image toggle and image position/size controls
- Toggle card border (borderless mode)
- Export single cards or the entire deck as PNGs with bleed margins (html2canvas, JSZip)
- Uses Google Fonts for typographic presets

## Why I built it
This started as a self‑directed challenge to learn HTML, CSS and vanilla JavaScript without following a tutorial. The goal was to build a real interactive UI, handle user image uploads, and implement a client‑side export workflow.

## What this demonstrates for a portfolio
- DOM manipulation and event handling at scale
- Handling binary assets in the browser (FileReader, data URLs)
- Rendering DOM to PNGs and packaging downloads (html2canvas, JSZip, FileSaver)
- Working with third‑party resources (Google Fonts)
- Dealing with practical front‑end problems: state sync (hover vs selected), timing/image load issues, and UI consistency
- Iterative problem solving and feature growth from a minimal idea to a fuller app

## Tech stack
- HTML5, CSS
- Vanilla JavaScript
- html2canvas — DOM → Canvas capture
- JSZip + FileSaver — bundle and download ZIPs
- Google Fonts

## Netlify link
- (https://lovely-figolla-915b36.netlify.app/)

## Running locally
- Open `index.html` in your browser (double‑click the file).  
- For live development with auto reload, use VS Code + Live Server extension and open the workspace root.

## Notes on reliability & known caveats
- Exports depend on images being loaded and CORS. 
- Custom icons have no simple button to reapply if removed by presets.
- Large images or high html2canvas scale values can slow or fail the export — scale down if needed.
- Some interactive logic (mirror/border, joker special cases, hover vs selected state) has nuanced behavior, the code balances many features and should be refactored for clarity.

## Lessons learned
- Centralise UI state: aim for a single source of truth (variables) over scattering logic across DOM checks.
- Keep update/render functions small and single‑responsibility to avoid conflicting side effects.

## Future improvements
- Wait for images to load before rendering exports to avoid html2canvas capturing the wrong state or failing.
- Features for user to save design progress to avoid loss of progress.
- Refactor code into smaller modules and remove repetetive code and event handling.
- Add more controllable elements for user interaction with graphical interface and preview area.
- Add progress UI and error reporting for exports.
- Improve accessibility and navigation.

