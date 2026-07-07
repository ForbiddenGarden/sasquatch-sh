# sasquatch.sh

Landing page for **Snohomish Sasquatch Hackers (SSH)** — a community-run cybersecurity
group for Northern Snohomish County, WA.

Static site, no framework, no build step. See `site/index.html`.

## Preview locally

```bash
cd site
python3 -m http.server 8888
# open http://localhost:8888
```

## Deploy

Deployed via Vercel, pointed at `sasquatch.sh`. `vercel.json` tells Vercel to serve
`site/` as the static output — no build command needed. Pushing to the deploy branch
ships the change.

## More

- `CHARTER.md` — mission, principles, IP policy, governance
- `CLAUDE.md` — project context for AI-assisted sessions
