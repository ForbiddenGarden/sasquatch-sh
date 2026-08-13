# sasquatch.sh

Landing page and blog for **Snohomish Sasquatch Hackers (SSH)** — a community-run
cybersecurity group for Northern Snohomish County, WA.

Jekyll builds `site/` into `_site/`. The landing page, slide decks and `.ics` files
have no front matter, so Jekyll copies them through byte-for-byte — they're still
plain hand-written HTML with embedded CSS.

## Writing a post

Posts are markdown files in `site/_posts/`, named `YYYY-MM-DD-your-slug.md`.

```bash
cp site/_drafts/example-post.md site/_posts/2026-09-01-my-post.md
$EDITOR site/_posts/2026-09-01-my-post.md
```

Fill in the front matter (`title`, `author`, `date`, `tags`, `description`), write
markdown below it, open a PR. It goes live on merge. Tag pages and the RSS feed
generate themselves.

Anything in `site/_drafts/` is ignored unless you build with `--drafts`.

## Preview locally

First time only — needs Ruby plus dev headers:

```bash
sudo apt install ruby-dev build-essential   # Debian/Ubuntu
gem install --user-install bundler
bundle install
```

Then:

```bash
bundle exec jekyll serve --drafts --livereload
# open http://localhost:4000
```

## Deploy

Deployed via Vercel, pointed at `sasquatch.sh`. `vercel.json` runs
`bundle exec jekyll build` and serves `_site/`. Pushing to the deploy branch ships
the change.

`Gemfile.lock` must include the Linux platform, since Vercel builds on Linux. If you
regenerate it elsewhere:

```bash
bundle lock --add-platform x86_64-linux
```

`middleware.js` password-gates `/slides.html` via the `SLIDES_PASSWORD` env var in
Vercel; it's unaffected by the build.

## More

- `CHARTER.md` — mission, principles, IP policy, governance
- `CLAUDE.md` — project context for AI-assisted sessions
