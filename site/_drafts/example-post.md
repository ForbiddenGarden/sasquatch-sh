---
# Copy this file to site/_posts/YYYY-MM-DD-your-slug.md and edit.
# The filename date is what orders the post on the blog index.
title: "Your Post Title"
author: Your Name
date: 2026-09-01 10:00:00 -0700
tags: [ctf, tooling]           # lowercase, reuse existing tags where they fit
description: "One or two sentences. Shows up on the blog index and in link previews."
---

Open with the thing itself, not a warm-up paragraph. What did you do, and why
should someone care?

## Headings are `##`

Body text is plain markdown. Links look like
[this](https://sasquatch.sh). Inline code uses `backticks`.

Fenced code blocks get syntax highlighting — put the language after the fence:

```python
import struct

def parse_header(blob: bytes) -> dict:
    magic, version = struct.unpack_from("<4sH", blob)
    return {"magic": magic, "version": version}
```

> Blockquotes work for pulling out a warning or a quote.

Images go in `site/images/` and are referenced from the site root:

![alt text describing the image](/images/your-screenshot.png)

## Before you open the PR

- Preview locally: `bundle exec jekyll serve --drafts` then open
  <http://localhost:4000/blog/>
- Check that any vulnerability you mention has already been disclosed and fixed.
- Confirm you're OK with this being public forever. It's a public repo.
