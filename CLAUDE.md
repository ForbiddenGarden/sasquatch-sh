# SSH — Snohomish Sasquatch Hackers

## What This Is

Community-run cybersecurity group for Northern Snohomish County, WA.  
Domain: **sasquatch.sh** (also a deliberate pun — `.sh` = shell script)  
Founded May 2026, Marysville, WA by Nelson.

## Project Files

| File/Dir | Purpose |
|----------|---------|
| `CHARTER.md` | Founding charter — mission, principles, IP policy, governance |
| `_config.yml` | Jekyll config — builds `site/` → `_site/` |
| `Gemfile` | Jekyll + jekyll-feed. `Gemfile.lock` must include the `x86_64-linux` platform |
| `site/index.html` | Landing page — hand-written HTML, embedded CSS, no front matter |
| `site/_layouts/` | `default` (shell), `blog` (post list), `post` (single post) |
| `site/_posts/` | Blog posts, markdown, `YYYY-MM-DD-slug.md` |
| `site/_drafts/example-post.md` | Copy-paste template for new posts (not published) |
| `site/blog/index.html` | Blog index; `site/blog/tags.html` → `/blog/tags/` |
| `site/assets/css/blog.css` | Blog styles — palette tokens duplicated from `index.html` |
| `site/first-meetup.ics` | Calendar invite for the July 18 first meetup (past) |
| `site/defcon-debrief.ics` | Calendar invite for the Aug 22 DEF CON debrief meetup |
| `middleware.js` | Vercel edge middleware password-gating `/slides.html` |
| `vercel.json` | Vercel build config — `bundle exec jekyll build`, output `_site` |

## Repo / Deploy

- GitHub: `github.com/ForbiddenGarden/sasquatch-sh` (public)
- Hosting: Vercel, deployed from this repo; DNS for `sasquatch.sh` points at Vercel
- Build: Jekyll (`bundle exec jekyll build`), output `_site/`. Pushing to the deploy branch ships it.

## Site Structure

Jekyll builds `site/` → `_site/`. Only markdown posts and files **with front matter**
get processed; `index.html`, `deck.html`, `slides.html`, `prank.html`, `.ics` and
images have no front matter, so Jekyll copies them through untouched. The landing
page stays a single self-contained HTML file with embedded CSS — keep it that way.

The blog reuses the landing page's terminal aesthetic via `site/assets/css/blog.css`.
The palette tokens there are **duplicated** from `index.html`'s `<style>` block, so
that `index.html` stays dependency-free. Change a colour in one, change it in both.

**To preview locally** (needs `sudo apt install ruby-dev build-essential` once):
```bash
cd /home/nelson/projects/lcl_sec_grp
bundle exec jekyll serve --drafts --livereload
# open http://localhost:4000
```

**Writing a post:** copy `site/_drafts/example-post.md` to
`site/_posts/YYYY-MM-DD-slug.md`, fill in front matter, open a PR. Tag pages
(`/blog/tags/`) and the RSS feed (`/blog/feed.xml`) generate automatically.

## Key Facts (for context in any session)

- **Full name**: Snohomish Sasquatch Hackers (SSH)
- **Coverage area**: Marysville, Arlington, Lake Stevens, Snohomish, Northern Everett
- **Meetup venue**: Snohomish County Library community spaces
- **First meetup**: Saturday, July 18, 2026, 11:00 AM — Monroe Public Library, Monroe, WA (past)
- **Next meetup**: Saturday, August 22, 2026, 12:00–2:00 PM — Monroe Public Library, Monroe, WA — DEF CON debrief
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
