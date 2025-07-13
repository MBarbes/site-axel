# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 5173)
- **Build for production**: `npm run build` 
- **Preview production build**: `npm run preview` (runs on port 4173)
- **Lint code**: `npm run lint`
- **Initialize Tailwind**: `npm run tailwind-init` (if needed)

## Architecture Overview

This is a modern React website built with Vite, featuring:

### Tech Stack
- **React 18** with functional components and hooks
- **Vite** for build tooling and dev server
- **Tailwind CSS v4** with @tailwindcss/vite plugin (CSS-first configuration)
- **Framer Motion** for animations
- **AOS (Animate On Scroll)** for scroll animations
- **Leaflet** for interactive maps

### Tailwind CSS v4 Configuration
- **Plugin**: Uses `@tailwindcss/vite` plugin for optimal performance
- **CSS Import**: Single line `@import "tailwindcss";` in index.css
- **No PostCSS**: PostCSS configuration removed (not needed with v4)
- **Auto-detection**: Automatic content detection, no manual paths required
- **Performance**: Up to 5x faster builds compared to v3

### Component Structure
The app uses a clean architectural pattern with components organized in three categories:

1. **Layout Components** (`src/components/layout/`): TopBar, Navbar, Hero, Footer
2. **Section Components** (`src/components/sections/`): Services, About, Carousel, Calculator, MapSection, ContactForm  
3. **Common Components** (`src/components/common/`): BackToTopButton and other reusable components

### Performance Optimizations
- **Lazy loading**: All section components are lazy-loaded using React.lazy() with Suspense
- **Code splitting**: Automatic via Vite and lazy loading
- **Custom preloader**: Shows loading spinner while components load

### Key Files
- `src/App.jsx`: Main app component with lazy loading setup
- `src/main.jsx`: Entry point with AOS initialization
- `eslint.config.js`: ESLint configuration with React-specific rules
- `tailwind.config.js`: Tailwind setup with dark mode and Inter font

### Styling Approach
- Uses Tailwind CSS v4 with PostCSS configuration
- Dark mode ready (class-based toggle)
- Custom fonts (Inter) configured
- Responsive design patterns throughout

## Component Migration Notes
Some components exist in both root `components/` and organized subdirectories. The app imports from the organized structure (`layout/`, `sections/`, `common/`), suggesting a migration from flat to organized structure is in progress.

## Administration Interface

### Access
- **URL Access**: Add `?admin=true` to any URL or navigate to `/admin`
- **Discrete Button**: Small "Admin" button in bottom-left corner of the site
- **Credentials**: Username: `admin`, Password: `admin123`

### Features
1. **Price Management** (`src/components/admin/PriceManager.jsx`)
   - Real-time price updates for calculator
   - Immediate localStorage persistence
   - Based on 2025 market research data
   - Modern notification system

2. **Image Management** (`src/components/admin/ImageManager.jsx`)
   - Load images from `public/db.json`
   - Category filtering (logo, gallery, background, uploaded)
   - Upload simulation with warnings
   - Statistics dashboard

3. **Content Management** (`src/components/admin/ContentManager.jsx`)
   - Edit all text content (Hero, About, Services, Contact)
   - Immediate localStorage persistence
   - Hero content automatically updates main page

### Data Structure
- **localStorage**: Immediate persistence for admin changes
- **public/db.json**: Simulated database with default values
- **Fallback system**: Graceful degradation if data unavailable

## Enhanced Calculator

### Features
- **Real pricing**: 2025 market-based pricing (25-35€/m² placo, 150-200€/m² isolation, 27-60€/m² cloisons)
- **Complexity levels**: Simple (-10%), Standard, Complex (+20%)
- **Price ranges**: Shows min-max estimates instead of fixed prices
- **Admin integration**: Uses prices from admin panel
- **Detailed display**: Surface, price per m², total cost with professional styling

## Modern Design System

### Color Palette
- **Primary**: Green scale (#ecfdf5 to #064e3b)
- **Accent**: Blue scale (#eff6ff to #1e3a8a)
- **Neutral**: Modern grays (#fafafa to #18181b)

### Custom Animations
- Fade in/out variations
- Slide animations
- Gentle bounce and pulse effects
- Float animation for decorative elements
- Reduced motion support for accessibility

### Enhanced Hero Section
- **Modern overlay**: Dark gradient instead of white
- **Glass effects**: Subtle backdrop blur elements
- **Improved typography**: Gradient text effects, better spacing
- **Interactive elements**: Animated buttons with hover effects
- **Scroll indicator**: Bouncing arrow
- **Admin integration**: Content loads from admin panel

### Micro-interactions
- **Hover effects**: Scale and lift transforms
- **Focus states**: Enhanced accessibility
- **Button animations**: Shimmer effects and translations
- **Card interactions**: Gentle lifting on hover
- **Custom scrollbars**: Themed with brand colors