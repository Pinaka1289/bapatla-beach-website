# Bapatla Beach Website

Complete travel guide for **Bapatla Suryalanka Beach** — Andhra Pradesh's hidden coastal gem on the Bay of Bengal.

🌐 **Live at: [bapatlabeach.com](https://bapatlabeach.com)** | [bapatlabeach.org](https://bapatlabeach.org)

## About

A comprehensive static website providing visitors with everything they need to plan a trip to Suryalanka Beach:

- Hotels & resorts (22 listings categorized by type and proximity)
- Restaurants & local food (12 eateries with specialties)
- Train schedules from Hyderabad & Vijayawada (26+ trains)
- Travel distances and routes from major cities
- Nearby attractions and points of interest
- Real estate listings near the beach
- Contact & WhatsApp for inquiries

## Tech Stack

- **Next.js 16** (static export via `output: "export"`)
- **Tailwind CSS 4** with dark mode
- **TypeScript**
- Data-driven from `src/data/beach-data.json`

## Getting Started

```bash
npm install
npm run dev        # Development server at localhost:3000
npm run build      # Production build → out/
```

## Deployment

Hosted on **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`). Push to `main` triggers automatic build and deploy to the custom domain `bapatlabeach.com`.

### Domains

| Domain | Role |
|--------|------|
| `bapatlabeach.com` | Primary (canonical) |
| `bapatlabeach.org` | Alternate (DNS redirect) |

## Project Structure

```
src/
  app/           # Next.js app router pages
  components/    # React components
  data/          # beach-data.json (all content)
  hooks/         # Custom hooks
  lib/           # TypeScript types
public/
  images/        # Logo, favicons
  videos/        # Hero background video
  CNAME          # Custom domain for GitHub Pages
```

## SEO

- Structured data (JSON-LD): TouristDestination, WebSite, FAQPage
- OpenGraph and Twitter card metadata
- Sitemap with domain alternates
- Canonical URL and robots.txt
- AdSense-ready ad slots (4 placements)

## Contact

- Email: pinaka1289@gmail.com
- Phone: 824-743-7284
- WhatsApp: +1 8608306791
