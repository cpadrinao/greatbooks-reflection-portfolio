# Great Books Reflection Portfolio

A personal digital portfolio website created for the Great Books course, showcasing literary analyses, critical lenses, personal insights, and reflections on timeless masterpieces from world literature.

## About the Project

This website serves as my final digital portfolio for the subject **Great Books (NRs)**.

As a senior Computer Science student, this portfolio provided a meaningful opportunity to step away from code and reflect on classic literature. Through this project, I explored how ancient epics, philosophical wisdom, animal fables, and medieval romances speak directly to human nature, personal values, ethical dilemmas, and everyday struggles that remain relevant today.

## What is Inside the Portfolio

The website is organized into several key sections:

* **Home Page**: A welcoming entrance featuring an interactive typewriter effect, dynamic collision-reactive ambient elements, and randomized masterpiece highlights that shuffle on each visit.
* **Student Profile**: A personal reflection sharing my academic background in Computer Science, reading habits, and expectations, paired with an interactive portrait that swaps on interaction and auto-cycles every 5 seconds on mobile screens.
* **Literary Analyses**: In-depth critical studies of seven foundational masterpieces, each examined through a distinct literary lens:
  1. *Voice out of the Whirlwind* (Ancient Hebrew Wisdom Tradition) - Ecocritical Lens
  2. *The Panchatantra* (Classical India) - Structuralist Lens
  3. *The Ramayana* (Ancient Indian Epic) - Archetypal Lens
  4. *The Mahabharata* (Ancient Indian Epic) - Socioeconomic / Marxist Lens
  5. *The Odyssey* (Ancient Greece) - Psychoanalytic Lens
  6. *The Song of Roland* (Medieval Europe) - Historical / Contextual Lens
  7. *The Tale of Genji* (Classical Japan) - Feminist Lens
* **Favorite Masterpiece Spotlight**: A dedicated showcase on Homer's *The Iliad*, examined through a Formalist lens to highlight Homeric poetic craftsmanship, the wrath of Achilles, and shared human compassion.
* **Digital Video Summaries**: Curated video breakdowns embedded into each reading page with creator attributions to help visualize the narrative arc of each story.
* **Course Reflection & Synthesis**: Comprehensive synthesis covering core academic takeaways across civilizations, critical lenses, and personal reflections on teamwork, leadership, empathy, and overcoming challenges.
* **Credits & Sources Page (`/credits`)**: Complete directory crediting all sources utilized across the site, including the ambient soundtrack, YouTube video creators, featured artwork plates, literary traditions, and technical colophon.
* **Ambient Music Player**: A custom persistent vinyl CD player widget playing *Killswitch Lullaby* by Flawed Mangoes. Powered by Astro's client router transitions, the music continues playing smoothly across page navigations without restarting or resetting the track timer.

## Technology Stack & Design System

The portfolio was built using modern web standards with an editorial, classic book-cloth aesthetic:

* **Astro (v7.4 / v5 engine)**: Static Site Generation (SSG) framework combining lightweight static HTML output with instant client-side routing.
* **Astro ClientRouter (`astro:transitions`)**: Powers client-side page transitions and persistent DOM elements (`transition:persist`), allowing continuous background music playback across navigations.
* **HTML5 & Vanilla CSS**: Custom editorial typography and design with zero bloated CSS frameworks. Features a classic color palette: warm paper off-white (`#fbfaf7`), rich book-press ink (`#110e0c`), and signature crimson book-cloth accents (`#881337`).
* **TypeScript & Modern JavaScript**: Drives interactive UI components, including the typewriter animation, floating emoji physics, profile portrait swapping, and custom audio player controls.
* **Typography**: Clean, crisp typography using the Poppins font family via Google Fonts.

## How to Run the Project Locally

To run this portfolio locally on your machine:

1. **Prerequisites**: Ensure Node.js (version 20 or higher) is installed.
2. **Navigate to the project directory**:
   ```bash
   cd greatbooks-reflection-portfolio
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Open your browser** and visit:
   ```
   http://localhost:4321
   ```

## Production Build

To build the static production site:

```bash
npm run build
```

The compiled output will be generated inside the `dist/` directory, ready to be deployed to any static web host (such as GitHub Pages, Vercel, or Netlify).

## Author

* **Crisler Annilov B. Padrinao**
* 4th Year, Bachelor of Science in Computer Science
