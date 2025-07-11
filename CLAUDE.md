# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page website for the Tokyo-based emo band "mosquitone", recreating the content from www.mosquit.one. The site is built with vanilla HTML, CSS, and JavaScript without any build tools or frameworks.

## Architecture

The site uses a **Single Page Application (SPA) pattern** with hash-based routing:

- **Navigation System**: Hash-based routing (`#intro`, `#music`, `#live`, etc.) controlled by JavaScript
- **Panel System**: Each section is an `<article class="panel">` that gets shown/hidden via CSS classes
- **State Management**: Active states managed through DOM class manipulation
- **Responsive Design**: CSS Grid and Flexbox with mobile-first approach

### Key Components

- `index.html`: Contains all 6 sections (intro, news, music, live, contact, about) in a single file with full SEO optimization
- `script.js`: Handles navigation, URL routing, keyboard shortcuts, and animations
- `style.css`: Nord-inspired dark theme with responsive breakpoints
- `album-cover.svg`: Placeholder band artwork
- `icons/`: Contains favicon files (favicon.png and various sizes)
- `sitemap.xml`: XML sitemap for search engine crawling
- `robots.txt`: Search engine crawler guidance file

## Development Commands

This is a static website with no build process. To develop:

```bash
# Serve locally (use any static server)
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

Open browser to `http://localhost:8000`

## Content Structure

The site mirrors the original mosquit.one structure:
- **Intro**: Band overview with featured album
- **News**: Latest band news and announcements
- **Music**: Discography (albums, demos) and streaming platform links
- **Live**: Upcoming shows (July/August 2025) and past events
- **Contact**: Email, social media links, and booking info
- **About**: Band formation timeline (2018-2024) and member information

## Design System

The project has two distinct design themes available on separate branches:

### Main Branch (Dark Emo Theme)
- **Color Palette**: Nord-inspired dark theme (`#2e3440`, `#88c0d0`, `#d8dee9`, etc.)
- **Typography**: Roboto Condensed, Oswald, Bebas Neue from Google Fonts
- **Aesthetic**: Professional emo band presentation with subtle textures

### Cute-Pop-Design Branch (Vibrant Pop Theme)  
- **Color Palette**: Pastel gradients (`#ffeaa7`, `#fab1a0`, `#fd79a8`, `#a29bfe`, etc.)
- **Typography**: Comic Neue and Nunito from Google Fonts
- **Aesthetic**: Playful pop design with emoji decorations and bouncing animations

Both themes share the same:
- **Layout**: Fixed navigation header + scrollable content panels
- **Animations**: Entrance animations, hover effects, and interactive transitions

## Navigation Features

- Hash-based routing with browser history support and smooth scrolling
- Keyboard navigation (arrow keys navigate sections, Home/End for first/last)
- Mobile-responsive hamburger-style navigation with animated toggle
- External link loading animations
- Intersection Observer for content entrance animations
- Section sequence: intro → news → music → live → contact → about

## Branch Strategy

- **main**: Production-ready dark emo theme
- **cute-pop-design**: Alternative vibrant pop aesthetic
- Both branches maintain identical functionality and content structure
- Switch themes by checking out different branches

## Japanese Content

The site contains Japanese text for band information, show details, and member names. Ensure any text updates maintain proper Japanese language formatting and cultural context.

## Deployment

The site is deployed and globally accessible on multiple platforms:

### Live URLs
- **Surge.sh**: https://mosquitone-tokyo.surge.sh
- **GitHub Pages**: https://chikarautsumi.github.io/official-site-by-claude

### Deployment Commands

**GitHub Deployment:**
```bash
git add .
git commit -m "Update site content"
git push origin main
```
GitHub Pages automatically deploys from the main branch.

**Surge Deployment (No Prompts):**
```bash
surge . mosquitone-tokyo.surge.sh
```
Requires login with email: chiksrskobu0225+surge@gmail.com

### Repository Information
- **GitHub Repository**: https://github.com/chikarautsumi/official-site-by-claude
- **Remote**: git@github.com:chikarautsumi/official-site-by-claude.git
- **Branch**: main

## SEO Optimization

The site is fully optimized for search engines and social sharing:

### Meta Tags & Open Graph
- Comprehensive meta tags (title, description, keywords) in Japanese and English
- Open Graph tags for Facebook/LinkedIn sharing with custom preview images
- Twitter Card metadata for enhanced Twitter sharing
- Canonical URLs and proper robots meta tags

### Structured Data
- JSON-LD structured data implementing Schema.org MusicGroup markup
- Band member information, discography, and social media profiles
- Album and track metadata for rich search results
- Proper semantic markup for search engine understanding

### Technical SEO
- `sitemap.xml`: Complete XML sitemap listing all sections with priority and update frequency
- `robots.txt`: Search engine crawler guidance with sitemap reference
- Semantic HTML structure with proper heading hierarchy (H1-H6)
- Image alt attributes optimized for accessibility and SEO
- Screen reader accessible elements with `.sr-only` class

### SEO Best Practices
- Mobile-first responsive design
- Fast loading static site architecture
- Clean URLs with hash-based routing
- Proper internal linking structure
- Japanese language content with appropriate locale settings

The site is optimized for searches related to:
- "mosquitone" / "モスキートーン"
- "Tokyo emo band" / "東京 エモ バンド"
- "When I was in the future" album
- Individual band member names
- Emo music Tokyo scene