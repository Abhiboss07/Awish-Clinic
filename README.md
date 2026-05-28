# 🏥 Awish Clinic — Clinical Wellness & Aesthetic Sanctuary

An ultra-premium, cinematic, and modern clinical wellness platform designed with a clean, high-contrast luxury **Light Theme** aesthetic. 

Awish Clinic bridges modern wellness startup aesthetics with medical trustworthiness—combining board-certified MBBS, MD dermatologist credentials with interactive clinical tools, Apple-level minimalism, Awwwards-winning UI design, and fluid 60fps animations.

---

## 🎨 Core Design Direction

The design positions itself as a broader clinical wellness setup rather than a simple aesthetic salon, ensuring complete biological harmony.

*   **Aesthetics:** Luxurious, bright, soft, scientific, and human-centered.
*   **Colors:** Pure clinical white backdrop, vibrant clinical brand teal (`#0d9488`) for medical trust, and soft luxury lavender (`#8b5cf6`) for cosmetic elegance.
*   **Atmosphere:** Soft aurora mesh lighting overlays using micro-opacities for modern glowing accents.
*   **Typography:** Elegant high-contrast titles in deep charcoal slate (`#0f172a`) set in Playfair Display Serif, matched with Outfit Sans for crisp, accessible copy.

---

## ✨ Immersive Interactive Features

### 🕺 1. Symmetrical Sexe-Specific Hero Visualizer
An interactive diagnostic visualizer mapped onto a responsive dual split-body layout:
*   **Male System (Teal):** Targets hair loss, beard growth, acne, pigmentation, low stamina, chronic stress, and belly fat.
*   **Female System (Lavender):** Targets hair fall, hormonal acne, PCOS weight, melasma/skin glow, thyroid wellness, dark circles, and weight management.
*   **Micro-Interactive Hotspots:** Tapping pulsing hotspot indicators displays real-time details HUD popover panels aligned directly adjacent to the tapped dot (sliding left on the Male system and right on the Female system).

### 🎚️ 2. GPU-Accelerated Before & After Slider
A clean, responsive visual comparison widget for treatment transformations:
*   Uses high-performance, GPU-accelerated **CSS `clip-path`** instead of layout-thrashing JavaScript measurement loops.
*   Keeps before and after images perfectly aligned and sharp at a fixed aspect ratio with zero distortion or hydration artifacts.

### 📅 3. Multi-Step Secure Booking Wizard
An intuitive, soft glass-panel consultation scheduler:
*   Guides patient workflows across locations, consulting physicians, schedules, and clinical notes.
*   Uses accessible, highly visible form fields with proper borders and slate labels for perfect WCAG readability.

### ❓ 4. High-Contrast Patient Accordions
An elegant FAQ module with smooth Framer Motion expand/collapse height animations, custom circular teal chevron badge indicators, and high-contrast, fully visible copy.

---

## 🛠️ Technology Stack

*   **Framework:** [Next.js](https://nextjs.org/) (Turbopack Powered)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with integrated custom `@theme` styling variables.
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) for micro-interactions & [Lenis](https://lenis.darkroom.engineering/) for 60fps smooth spring scrolling.
*   **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

*   Node.js 18.x or later
*   npm or pnpm package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:Abhiboss07/Awish-Clinic.git
    cd Awish-Clinic
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the local development server:**
    ```bash
    npm run dev
    ```

4.  **Open in your browser:**
    Access [http://localhost:3000](http://localhost:3000) to view the live, hot-reloading development server.

### Building for Production

Verify the TS compiler and generate the optimized Next.js static production bundle:
```bash
npm run build
```

---

## 🌐 Deploying on Vercel

The easiest way to deploy this static, highly optimized platform is Vercel's continuous deployment integration:

1.  Log in to [vercel.com](https://vercel.com) using your GitHub account.
2.  Click **"Add New..."** -> **"Project"** and import the **`Awish-Clinic`** repository.
3.  Vercel automatically detects Next.js build parameters. Click **"Deploy"**.
4.  Every future `git push` to the `main` branch will automatically build and publish preview environments in real-time.

---

## 📄 Licensing & Clinical Rights

All sitemap structures, physician credentials (Dr. Vijay Kumar & Dr. Pooja Varshney), clinical locations, and treatment directories are reserved and registered for **Awish Clinic**.
