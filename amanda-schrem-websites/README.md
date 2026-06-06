# Amanda Schrem Websites

This folder contains two isolated static websites:

- `amanda-schrem-music/`
- `amanda-schrem-tuition/`

Recommended storage and hosting:

- Store the code in GitHub.
- Host with Cloudflare Pages, connected to GitHub.
- Use one Cloudflare Pages project per website, each pointed at its own directory.

This is more flexible than GitHub Pages because Cloudflare can later handle:

- form endpoints
- AI chat endpoints
- bot protection
- redirects
- custom domains
- fast static delivery

## Local testing

From the `sites` folder:

```powershell
python -m http.server 4173
```

Then open:

- `http://localhost:4173/amanda-schrem-music/`
- `http://localhost:4173/amanda-schrem-tuition/`

## Before going live

Replace placeholder contact behaviour with:

- Amanda's real phone number on all `Call Amanda` buttons
- the live email address or lead endpoint
- Cloudflare Worker or form handler for `/api/music-lead`
- Cloudflare Worker or form handler for `/api/tuition-lead`
- Google Tag Manager container ID
- Google Ads conversion labels
- real Amanda photos if available

The generated hero images are original project assets and are stored locally in each site's `assets/` folder.
