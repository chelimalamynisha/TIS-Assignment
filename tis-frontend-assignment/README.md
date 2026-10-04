# Tulas International School — Homepage Redesign

A production-style React/Vite frontend redesign created for the NetPuppys Frontend Developer assignment. The project keeps the TIS identity and important reference content while introducing a cleaner editorial layout, responsive components, purposeful motion and accessible interactions.

## Tech stack
- React 19
- Vite
- Framer Motion
- Lucide React
- Modern CSS
- Google Fonts (DM Sans + Manrope)

## Included features
- Responsive sticky navigation + mobile hamburger menu
- Animated hero section
- Scroll-triggered reveal animations
- Scroll progress indicator
- Light / dark theme switcher
- Custom cursor on pointer devices
- Responsive academic cards generated from data arrays
- Bento-style campus/facilities grid
- Student-life gallery
- Testimonial cards using reference-site feedback
- Admissions CTA linked to the official admissions pages
- Contact form with client-side validation and success state
- Accessible labels, alt text, semantic sections and keyboard-friendly controls
- SEO title, meta description and single H1
- Reduced-motion support
- No backend or secret keys required

## Run locally

Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`).

Production test:

```bash
npm run build
npm run preview
```

## Deploy

### Vercel
1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### Netlify
Build command: `npm run build`  
Publish directory: `dist`

## Project structure

```text
 tis-frontend-assignment/
 ├── public/
 │   └── favicon.svg
 ├── src/
 │   ├── components/
 │   │   ├── About.jsx
 │   │   ├── Academics.jsx
 │   │   ├── Activities.jsx
 │   │   ├── AdmissionsCTA.jsx
 │   │   ├── Contact.jsx
 │   │   ├── Facilities.jsx
 │   │   ├── Footer.jsx
 │   │   ├── Hero.jsx
 │   │   ├── Logo.jsx
 │   │   ├── Navbar.jsx
 │   │   ├── Reveal.jsx
 │   │   ├── SectionHeading.jsx
 │   │   ├── Testimonials.jsx
 │   │   └── WhyTIS.jsx
 │   ├── data/
 │   │   └── content.js
 │   ├── App.jsx
 │   ├── index.css
 │   └── main.jsx
 ├── .env.example
 ├── .gitignore
 ├── index.html
 ├── package.json
 ├── vite.config.js
 └── README.md
```

## Reference content
The content was cross-checked against the current Tulas International School website, including the homepage, academics, facilities, admissions, mission/vision and contact pages. External facts have not been invented for the redesign.

Official reference: https://tis.edu.in/

Reference content used for this redesign includes the live TIS homepage, CBSE curriculum information, admissions information and facilities information. The redesign intentionally uses an original UI rather than reproducing the reference site pixel-for-pixel.

## Important note about images
The demo uses optimized remote image URLs for visual placeholders/stock imagery. Before a production submission, replace these with assets that you have permission to use (preferably official TIS assets supplied by the client) and keep image dimensions/compression optimized.

## Assignment checklist
- [x] React framework
- [x] Reusable components
- [x] Responsive desktop/tablet/mobile layouts
- [x] Sticky responsive navbar
- [x] Hero + CTAs
- [x] About + verified statistics
- [x] Academics
- [x] Facilities/campus
- [x] Why TIS
- [x] Life at TIS
- [x] Testimonials
- [x] Admissions CTA
- [x] Contact form + validation
- [x] Footer
- [x] Scroll-triggered animations
- [x] Custom cursor
- [x] Theme switcher
- [x] Scroll progress bar
- [x] Accessibility basics
- [x] SEO basics
- [x] Deployment instructions
