# abir-portfolio — Local Development

This repository contains my personal portfolio web app (React + Vite + Tailwind + Framer Motion + Three.js). Follow the steps below to run it locally.

## Prerequisites

- Node.js 18+ and npm 9+ (recommended: install via nvm)

```bash
# install nvm (see docs if you don't have it)
nvm install 18
nvm use 18
```

## Quick Start

```bash
# 1) Clone
git clone <YOUR_GIT_URL>
cd abir-portfolio

# 2) Install dependencies
npm install

# 3) Start the dev server
npm run dev

# 4) Open the app
# Vite will print a local URL like http://localhost:5173
```

## Build & Preview

```bash
# Build for production
npm run build

# Preview the built app locally
npm run preview
```

## Deploy to GitHub Pages (branch v1)

```bash
# Ensure you're on branch v1
git checkout v1

# Build and publish the dist/ folder to the gh-pages branch
npm run build
npm run deploy

# In GitHub repo settings → Pages, set Source to 'Deploy from a branch' → gh-pages
```

## Project Scripts

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — create production build
- `npm run preview` — serve the production build locally

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js (@react-three/fiber, @react-three/drei)

## About Me

Hi, I'm Abir Dey — a GenAI & Backend Engineer focusing on scalable systems, data pipelines, and intelligent model deployment. Connect with me:

- Email: abirdey43@gmail.com
- LinkedIn: https://www.linkedin.com/in/abir-dey-42ab19235/
- GitHub: https://github.com/AbirDey2002
