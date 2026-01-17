# ABC Paints Website

A modern, high-performance business website for ABC Paints built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Responsive design with dark mode, animations (Framer Motion), and a premium aesthetic.
- **Internationalization (i18n)**: Full English and Sinhala support using `react-i18next`.
- **Dynamic Content**: Products and Seller locations are fetched dynamically from a Google Sheet.
- **Serverless Backend**: Contact forms and Contractor registrations are handled via Google Apps Script.
- **SEO Optimized**: Dynamic meta tags, Open Graph support, and automatic sitemap generation.
- **Cost Calculator**: Interactive tool for estimating project costs.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide React (Icons)
- **State/Logic**: React Router, React Hook Form, Axios/Fetch
- **Maps**: React Leaflet (OpenStreetMap)
- **CMS/Database**: Google Sheets (via Public CSV export)

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd abc-paints
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # If you encounter peer dependency issues with React 19:
    npm install --legacy-peer-deps
    ```

3.  **Environment Configuration:**
    - Duplicate `.env.example` and rename it to `.env`.
    - Update the values with your own keys:
      ```ini
      VITE_GOOGLE_SHEET_ID=your_sheet_id
      VITE_APPS_SCRIPT_URL=your_script_url
      VITE_SITE_URL=https://your-domain.com
      ```
    - *Refer to `setup_guide.md` in the `artifacts` folder for detailed instructions on creating the Google Sheet and Apps Script.*

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Access the site at `http://localhost:5173`.

## Build & Deployment

To create a production build:

```bash
npm run build
```

This command will:
1.  Compile TypeScript.
2.  Bundle the application using Vite.
3.  Generate `sitemap.xml` in the `public` folder.

The output will be in the `dist` directory, ready to be deployed to Vercel, Netlify, or any static host.

## Project Structure

```
src/
├── components/     # Reusable UI components (Hero, ProductCard, etc.)
├── pages/          # Full page components (Home, About, etc.)
├── services/       # API integration (Google Sheets/Scripts)
├── utils/          # Helper functions (Language logic)
├── locales/        # Translation files (if moved from i18n.ts)
├── i18n.ts         # Internationalization config
├── main.tsx        # Entry point
└── App.tsx         # Routing and Layout
scripts/
└── generate-sitemap.cjs # Build script for SEO
```

## License

Private Property of ABC Paints.
