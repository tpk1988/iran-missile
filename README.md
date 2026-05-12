# Iran Missile

A small Phaser game/demo project. It renders a simple space scene with a scrolling background, Phaser logo, and animated spaceship sprite.

## Requirements

- Node.js 20+ recommended (tested with Node.js 24.15.0)
- npm 10+ recommended (tested with npm 11.12.1)

## Main dependencies

- Phaser `^3.90.0`
- Vite `^7.3.3` for the local dev server and production build

## Run locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Then open the local URL printed by Vite, usually `http://localhost:5173/`.

Build a production bundle:

```bash
npm run build
```

Preview the production bundle locally:

```bash
npm run preview
```

## Project structure

```text
.
├── index.html          # HTML entry point loaded by Vite
├── package.json        # npm scripts and dependency definitions
├── package-lock.json   # locked dependency versions
├── assets/             # image and spritesheet assets
├── src/
│   ├── main.js         # Phaser game configuration/bootstrap
│   └── scenes/Start.js # Start scene, preload/create/update logic
└── thumbnail.png       # project thumbnail image
```

Phaser is managed through npm and imported from `node_modules`; the old committed `phaser.js` bundle is no longer required.
