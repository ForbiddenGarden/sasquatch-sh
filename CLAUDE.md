# SSH — Snohomish Sasquatch Hackers

## What This Is

Community-run cybersecurity group for Northern Snohomish County, WA.  
Domain: **sasquatch.sh** (also a deliberate pun — `.sh` = shell script)  
Founded May 2026, Marysville, WA by Nelson.

## Project Files

| File/Dir | Purpose |
|----------|---------|
| `CHARTER.md` | Founding charter — mission, principles, IP policy, governance |
| `site/index.html` | Static landing page for sasquatch.sh (single file, no build step) |
| `site/first-meetup.ics` | Downloadable calendar invite for the first meetup |
| `vercel.json` | Tells Vercel to serve `site/` as the static output (zero build step) |

## Repo / Deploy

- GitHub: `github.com/ForbiddenGarden/sasquatch-sh` (public)
- Hosting: Vercel, deployed from this repo; DNS for `sasquatch.sh` points at Vercel
- No build step — pushing to the deploy branch is enough

## Landing Page

Single HTML file with embedded CSS — no framework, no JS dependencies, no build process.  
Deploy by copying `site/index.html` to any static host (GitHub Pages, Netlify, Cloudflare Pages, S3).

**Before publishing, fill in:**
- Email contact uses `sasquatchhackers@gmail.com`
- Uncomment and fill GitHub org link when created
- Uncomment and fill Discord/Signal/etc. invite when set up

**To preview locally:**
```bash
cd /home/nelson/projects/lcl_sec_grp/site
python3 -m http.server 8888
# open http://localhost:8888
```

## Key Facts (for context in any session)

- **Full name**: Snohomish Sasquatch Hackers (SSH)
- **Coverage area**: Marysville, Arlington, Lake Stevens, Snohomish, Northern Everett
- **Meetup venue**: Snohomish County Library community spaces
- **First meetup**: Saturday, July 18, 2026, 11:00 AM — Monroe Public Library, Monroe, WA
- **Membership**: None required — show up and participate
- **IP policy**: Members own their work; group projects → SSH GitHub org under MIT
- **Governance**: Rough consensus, no officers, no votes unless group decides otherwise

## Tone & Voice

- Welcoming, not elitist — explicitly no gatekeeping
- Technical but accessible
- Dry PNW humor is fine; the Sasquatch/Bigfoot angle is intentional and playful
- Open source ethos — build in public, share freely

## Domain / Hosting Notes

- Domain: `sasquatch.sh` (owned by Nelson)
- DNS and hosting TBD — Cloudflare Pages or GitHub Pages recommended for static site
- Email: `sasquatchhackers@gmail.com`
