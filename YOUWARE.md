# IronForge Fitness Website

A modern, high-performance landing page for a premium fitness club, built with React, Tailwind CSS, and Vite.

## Project Overview

**IronForge Fitness** is a single-page application (SPA) designed to convert visitors into gym members. It features a dark, energetic aesthetic with bold red accents (`red-600`) to convey energy and power.

### Key Features

- **Responsive Design**: Fully adapted for mobile, tablet, and desktop.
- **Modern UI/UX**:
  - **Hero Section**: Immersive background with bold typography and clear CTAs.
  - **Features Grid**: Highlights key benefits (24/7 access, pro trainers, top equipment).
  - **Classes Showcase**: Visual grid of available classes (Yoga, Boxing, CrossFit).
  - **Trainers Team**: Professional profiles of the coaching staff.
  - **Pricing Tables**: Clear comparison of membership plans with a highlighted "Best Value" option.
- **Smooth Navigation**: Sticky navbar with smooth scroll to sections.
- **Interactive Elements**: Hover effects, transitions, and mobile menu.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Assets**: High-quality stock images (Pixabay)

## Project Structure

```
src/
├── assets/
│   └── images/          # Optimized images for Hero, Classes, Trainers
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, Features, Classes, Trainers, Pricing
│   └── ui/              # Reusable Button, Container, Section components
├── App.tsx              # Main application layout
└── index.css            # Global styles and Tailwind directives
```

## Customization

### Colors
The primary accent color is `red-600`. To change it, update the Tailwind classes (e.g., `text-red-600`, `bg-red-600`, `border-red-600`) or configure `tailwind.config.js`.

### Content
- **Text**: Edit the text directly in the component files in `src/components/sections/`.
- **Images**: Replace images in `src/assets/images/` and update imports in components.

## Development

1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm run dev`
3. **Build for production**: `npm run build`
