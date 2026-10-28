# Samgan Digital Tech website
React + Vite + Tailwind + Motion. Live at https://onchetan-cell.github.io/my-company-website/
- `npm install`, `npm run dev`, `npm run build`
- Deploys automatically via `.github/workflows/deploy.yml` (Settings > Pages > Source: GitHub Actions).
- Contact form: set `VITE_FORM_ENDPOINT` (see `.env.example`) as a repository variable/secret-free build env; until then it honestly reports that nothing was sent.
