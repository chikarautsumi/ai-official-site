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

- `index.html`: Contains all 5 sections (intro, music, live, contact, about) in a single file
- `script.js`: Handles navigation, URL routing, keyboard shortcuts, and animations
- `style.css`: Nord-inspired dark theme with responsive breakpoints
- `album-cover.svg`: Placeholder band artwork

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
- **Music**: Discography (albums, demos) and streaming platform links
- **Live**: Upcoming shows (July/August 2025) and past events
- **Contact**: Email, social media links, and booking info
- **About**: Band formation timeline (2018-2024) and member information

## Design System

- **Color Palette**: Nord theme (`#2e3440`, `#88c0d0`, `#d8dee9`, etc.)
- **Typography**: Source Sans Pro from Google Fonts
- **Layout**: Fixed navigation header + scrollable content panels
- **Animations**: Fade transitions between panels, entrance animations for content

## Navigation Features

- Hash-based routing with browser history support
- Keyboard navigation (arrow keys, Home/End)
- Mobile-responsive hamburger-style navigation
- External link loading animations

## Japanese Content

The site contains Japanese text for band information, show details, and member names. Ensure any text updates maintain proper Japanese language formatting and cultural context.