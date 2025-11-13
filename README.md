# Decksterity

Decksterity is a client-side playing-card designer built with plain HTML, CSS and JavaScript.  
It lets users customize card backs, suit icons, corner fonts/colors, and picture-card images (J/Q/K/Joker), preview changes live, and export a printable deck as PNGs (html2canvas + JSZip + FileSaver). Designed as a learning portfolio project to demonstrate practical front‑end skills.

## Quick pitch (1 sentence)
Interactive, in‑browser card designer that supports image uploads, presets, mirror/border controls, live preview and full‑deck export — useful as a beginner front‑end portfolio piece.

## Key features
- Live preview of a single card (front/back)
- Replace suit icons and picture-card images with user uploads
- Preset images and preset styles
- Mirror image toggle and image position/size controls
- Toggle card border (borderless mode)
- Export single cards or the entire deck as PNGs with bleed margins (html2canvas, JSZip)
- Uses Google Fonts for typographic presets

## Why I built it
This started as a self‑directed challenge to learn HTML, CSS and vanilla JavaScript without following a tutorial. The goal was to build a real interactive UI, handle user image uploads, and implement a client‑side export pipeline — all things useful in front‑end roles.

## What this demonstrates for a portfolio
- DOM manipulation and event handling at scale
- Handling binary assets in the browser (FileReader, data URLs)
- Rendering DOM to PNGs and packaging downloads (html2canvas, JSZip, FileSaver)
- Working with third‑party resources (Google Fonts)
- Dealing with practical front‑end problems: state sync (hover vs selected), timing/image load issues, and UI consistency
- Iterative problem solving and feature growth from a minimal idea to a fuller app

## Tech stack
- HTML5, CSS3
- Vanilla JavaScript (ES6)
- html2canvas — DOM → Canvas capture
- JSZip + FileSaver — bundle and download ZIPs
- Google Fonts

## Running locally (quick)
- Open `index.html` in your browser (double‑click the file).  
- For live development with auto reload, use VS Code + Live Server extension and open the workspace root.

## Notes on reliability & known caveats
- Exports depend on images being loaded and CORS; embedded uploads (data URLs) are most reliable.
- Large images or high html2canvas scale values can slow or fail the export — scale down if needed.
- Some interactive logic (mirror/border, joker special cases, hover vs selected state) has nuanced behavior; the code balances many features and should be refactored for clarity.

## Lessons learned (short)
- Centralize UI state: prefer a single source of truth (variables) over scattering logic across DOM checks.
- Wait for images to load before rendering exports — otherwise html2canvas can capture the wrong state or hang.
- Use CSS variables for themeable colors (easier to update from JS).
- Keep update/render functions small and single‑responsibility to avoid conflicting side effects.

## Future improvements (good talking points for interviews)
- Refactor code into smaller modules and remove duplicated event handlers.
- Move from ad‑hoc DOM state checks to a state manager or simple reactive layer.
- Add progress UI and error reporting for exports.
- Improve accessibility (labels, keyboard navigation).
- Add unit tests for utility functions.

## Contribution & contact
- This is a personal learning project. If you fork or suggest improvements, please open a PR with a focused change.  
- For questions about implementation decisions or help reproducing issues, open an issue in the repo or contact me via the project GitHub profile.
