Random Site Explorer — Complete Edition
Includes: Version 2 UI, Version 3 premium features, GSAP/particles, favorites, analytics, and scripts to fetch real 10k sites.

Important resources (used to guide generation of real 10k list):
- Tranco list (research-oriented top sites ranking). Use Tranco to produce a stable top sites ranking. Source: https://tranco-list.eu/ (see methodology).
- SimilarWeb / Semrush provide up-to-date top-sites reports and trends (useful for validation).
- Kaggle / public datasets contain top site lists (top 10 million). Example dataset: Top 10 million websites.

How to get real 10k sites (recommended):
1. Install Tranco python package: `pip install tranco requests`.
2. Run the included script: `python build/fetch_tranco.py --n 10000 --out database/all_sites_placeholder.json`
This will download Tranco's current top domains and write them to the app database. The script prefixes each domain with https:// for runtime redirecting.

Validating and removing dead links (optional):
- Use the provided `build/validate_urls.py` (not included) or run a HEAD checker to remove 404s.
- For large-scale validation, run server-side with concurrency (e.g., aiohttp).

Files of interest:
- app/index.html — main app
- app/styles.css — dark theme styles
- app/script.js — app logic (favorites, analytics, surprise me)
- app/modules/*.js — modular features (ai, analytics, favorites, trending, particles)
- database/all_sites_placeholder.json — placeholder 10k list (pre-filled with examples)
- build/fetch_tranco.py — script to fetch real top-sites list using Tranco
- Original uploaded file (for reference): /mnt/data/index.html

Notes about AdSense:
- The landing and app include visible placeholders where AdSense snippets can be inserted. Make sure to follow AdSense policies and add consent banners if targeting EU users.
