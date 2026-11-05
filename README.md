# Hariom Singh — Engineering & Data Science Portfolio

A modern, high-performance personal developer portfolio and technical dossier engineered for **Hariom Singh**, B.Tech student in Computer Science & Engineering (Data Science) at the **Indian Institute of Information Technology (IIIT) Bhopal**.

The application combines a cinematic ambient video hero presentation with a clean, high-contrast light theme (`#F8FAFC` foundation, `#0F172A` slate typography, and `#059669` emerald accents).

---

## 🌟 Key Features & Sections

### 1. Floating Pill Navbar
- **Glassmorphic Floating Pill**: Centered floating navigation with backdrop blur (`backdrop-blur-xl`) and rounded pill geometries.
- **Scroll-Spy Active Tracking**: Small monospace numbered indicators (`01.` through `06.`) with active emerald status dots that dynamically track section viewports.
- **Brand Insignia**: IIIT Bhopal live status badge with smooth hover animations.

### 2. Cinematic Hero Layer
- **Ambient Fullscreen Video**: High-definition looping video background with automatic playback optimization and graceful error recovery.
- **Dual Display Typography**: Condensed display header (`Anton`) overlaid with an energetic cursive signature font (`Condiment`) reading *"Hello! I'm Hariom"*.
- **Quick Technical Badges**: Pill tags highlighting IIIT Bhopal CSE-DS, C++ Algorithmic Logic, Generative AI & Prompt Engineering, and Google Cloud Career Launchpad.

### 3. Section 01: Executive Summary & Portrait
- **Studio Portrait Showcase**: Embedded photographic portrait framed with rounded-3xl glass styling, active badges (`IIIT Bhopal '25`, `CSE (Data Science)`), and an "Open to Connect" live status.
- **Profile Coordinates Matrix**: Quick-reference table featuring academic standing, location, one-click email copy with instant feedback, and a direct LinkedIn connection link.
- **Tactical Narrative & Philosophy**: Detailed executive brief outlining competitive coding in C++, multi-agent LLM systems, and chess-inspired analytical decision-making.
- **Three Core Competency Pillars**: Visual cards for *C++ & DSA*, *Agentic AI*, and *Cloud Systems*.

### 4. Section 02: Skills & Technical Matrix
- **Problem Solving & DSA**: C++ (Competitive Programming), Graph Theory, Monotonic Stacks, Bipartite Matching & Network Flow, Time & Space Optimization.
- **Languages & Core Systems**: Python, C, C++ Standard Template Library, Object-Oriented Programming, Memory & Complexity Profiling.
- **AI & Agentic Systems**: Basics of Prompt Engineering, Multi-Agent Workflows, Foundation Models, Chain-of-Thought Reasoning.
- **Cloud & Infrastructure**: Google Cloud Career Launchpad, Cloud Infrastructure, Git & Distributed Version Control.

### 5. Section 03: Featured Engineering Projects
- **Interactive Projects Grid**: 6 technical projects spanning C++ network flow engines, multi-agent AI research systems, serverless cloud workers, and scientific data science modeling suites.
- **Visual Tech Banners**: Custom architectural placeholder diagrams on each card:
  - **C++ Systems**: Directed graph theory node flows and asymptotic memory tags (`O(V + E)`, `[0x7FFE_HEAP]`).
  - **Python & Data Science**: Gaussian scatter plots with regression splines and matrix dimensions (`matrix[N, D]`).
  - **Google Cloud**: VPC subnet boundaries with compute nodes and Pub/Sub event streams.
  - **Agentic AI**: Multi-agent supervisor networks and Chain-of-Thought loops.
- **Category Filter Tabs**: Instant filtering by *All*, *C++ Systems*, *Python & DS*, *Cloud*, or *Agentic AI*.
- **Architectural Dossier Modal**: Clicking any card or the "Tech Breakdown" button opens an in-depth modal displaying system architecture, runtime complexity, and component-level module breakdown tables.

### 6. Section 04: Certifications & Industry Recognition
- **Verified Industry Credentials**: Showcasing certifications from **Google**, **Microsoft**, and **Anthropic** (Generative AI & Prompt Engineering), the **Google Cloud Career Launchpad**, and **AI Skill Fest**.
- **Partner Brand Emblems**: Official SVG vector logos for Google and Microsoft.
- **Interactive Filtering**: Filter credentials across All, AI, DSA, and Cloud tracks.

### 7. Section 05: Education Timeline
- **Academic Progression**: Features Bachelor of Technology in CSE (Data Science) from **IIIT Bhopal** (2021–2025) and secondary schooling at **Sant Atulanand Convent School**.
- **Curriculum Rigor**: Highlights grounding in multivariate calculus, linear algebra, algorithmic complexity, and data structures.

### 8. Section 06: Contact & Direct Inquiries
- **Viewport Entrance Animation**: Soft fade-up entrance trigger implemented via `IntersectionObserver`.
- **Interactive Direct Message Form**: Generates a pre-formatted email draft straight to `hariom18august@gmail.com`.
- **One-Click Communication**: Quick buttons to copy email address, open LinkedIn, or view repositories.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom Google Fonts (*Anton*, *Condiment*) |
| **Icons & Visual Assets** | [Lucide React](https://lucide.dev/) |
| **Animations & Observers** | Tailwind CSS keyframes + Native `IntersectionObserver` API |
| **Build & Tooling** | [Vite](https://vitejs.dev/) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:3000`.

4. **Type-check and build for production:**
   ```bash
   npm run build
   ```

5. **Lint codebase:**
   ```bash
   npm run lint
   ```

### 🌐 Deployment (Vercel / Netlify / Cloudflare Pages)

The repository includes a configured `.npmrc` with `legacy-peer-deps=true` and aligned `esbuild` versions to ensure zero peer-dependency conflicts during automated CI/CD builds:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## 📁 Project Structure

```text
├── index.html            # HTML entry point with Google Fonts preconnections
├── metadata.json         # Project metadata and capabilities configuration
├── package.json          # Dependencies and npm scripts
├── public/
│   └── assets/           # Static public assets (images, logos, icons)
├── src/
│   ├── assets/           # Bundled application images and media
│   ├── App.tsx           # Main application root with all sections and modals
│   ├── index.css         # Global Tailwind CSS entry point
│   └── main.tsx          # React DOM entry point
├── tsconfig.json         # TypeScript compiler configuration
└── vite.config.ts        # Vite configuration with Tailwind CSS plugin and path aliases
```

---

## 👤 Author & Contact

**Hariom Singh**  
*Computer Science & Engineering (Data Science) @ IIIT Bhopal*

- **Email**: [hariom18august@gmail.com](mailto:hariom18august@gmail.com)
- **LinkedIn**: [linkedin.com/in/hariom-singh-507493384](https://www.linkedin.com/in/hariom-singh-507493384)
- **Institution**: Indian Institute of Information Technology Bhopal, India
