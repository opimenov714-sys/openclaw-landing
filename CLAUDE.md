# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OpenClaw landing page — a single-file cyberpunk-themed HTML landing page for AI agent deployment services. The project includes pricing plans, feature showcase, use cases, and a contact form.

**No build process, no dependencies, no Node.js required.** Open the HTML file in a browser to see the result.

## Project Structure

- `openclaw-landing.html` — Single HTML file containing all markup, styling (Tailwind via CDN), and minimal JavaScript

## Architecture & Key Points

### Technology Stack
- **HTML5** with semantic markup
- **Tailwind CSS 3** loaded via CDN (`https://cdn.tailwindcss.com`)
- **Custom CSS** for neon cyberpunk effects (glowing text, animated borders, gradient backgrounds)
- **Vanilla JavaScript** for smooth scrolling and form interaction

### Design System
- **Color palette**: Neon cyan (#00FFFF), magenta (#FF00FF), pink (#FF1493), green (#39FF14), dark backgrounds (#0A0E27, #1A1F3A)
- **Typography**: 'Orbitron' for headings (futuristic feel), 'Space Mono' for body (monospace tech aesthetic)
- **Effects**: Text shadow glows, neon borders, backdrop blur, animated shimmer on price cards, scan line overlay

### Form Integration
The contact form uses **Formspree** (no backend required):
1. Create account at https://formspree.io/
2. Create a new project to get form ID (e.g., `xyzabc`)
3. Replace the `action` URL in the form: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
4. Submissions arrive via email + Formspree dashboard

Alternatively, use Netlify Forms (only if hosting on Netlify) by adding `data-netlify="true"` attribute.

### Sections
1. **Navigation** — Fixed header with logo and section links
2. **Hero** — Large headline with CTA buttons, grid stats
3. **Features** — 6 feature cards (agents, integration, pricing, templates, support, analytics)
4. **Use Cases** — 4 examples (chatbots, automation, analytics, document processing)
5. **Pricing** — 3 subscription tiers (Starter $29, Professional $99, Enterprise $499+)
6. **Contact** — Form + alternative contact methods
7. **Footer** — Links and copyright

## Common Tasks

### View locally
Open `openclaw-landing.html` directly in a browser (Chrome, Firefox, Safari, Edge).

### Deploy to Vercel
```powershell
npm install -g vercel
vercel
```
Follow CLI prompts. Site will be live with HTTPS and a free subdomain.

### Edit content
Open the HTML file in any text editor. Key areas:
- **Navigation**: Lines with `href="#features"`, `href="#pricing"`, `href="#contact"`
- **Pricing**: Search for `$29`, `$99`, `$499+` and surrounding text
- **Contact email**: Find `contact@openclaw.io`
- **Telegram**: Find `@openclaw`
- **Form action**: The Formspree URL in `<form action="...">`

### Modify colors/styling
- Neon colors defined in `<style>` section (e.g., `#00FFFF`, `#FF00FF`, `#FF1493`)
- Custom CSS classes: `.glow-text`, `.neon-border`, `.btn-cyan`, `.btn-magenta` etc.
- Tailwind classes used throughout (e.g., `text-[#00FFFF]`, `bg-gradient-to-r`)

### Add new sections
Follow the existing pattern:
1. Add a `<section>` with `id` and padding (`py-32 px-4`)
2. Wrap content in `max-w-6xl mx-auto`
3. Use `.glow-text`, `.neon-border` classes for consistency
4. Add navigation link in the header if needed

## Notes

- **No JavaScript framework**: Intentional. Simple HTML → easier to edit, faster load, full context visibility.
- **Tailwind via CDN**: Fast to develop, no build step required.
- **Formspree has free tier limits**: ~50 submissions/month on free plan; check pricing for higher volumes.
- **All CSS is inline**: Consider extracting to external stylesheet if file grows beyond 2000 lines.
- **Browser compatibility**: Works in all modern browsers (Chrome, Firefox, Safari, Edge). Smooth scrolling requires modern JS support.
