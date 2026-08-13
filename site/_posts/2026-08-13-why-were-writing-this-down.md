---
title: "Why We're Writing This Down"
author: Nelson
date: 2026-08-13 09:00:00 -0700
tags: [meta, ssh]
description: "SSH has a blog now. Here's what goes on it, who can post, and the two rules."
---

Every month a handful of people show up at a library in Monroe, someone plugs a
laptop into a projector, and something genuinely interesting happens for two
hours. Then everybody drives home and it evaporates.

That's the problem this fixes. SSH has a blog now.

## What goes here

Roughly, anything a member thought was worth the effort of typing up:

- **Meetup recaps** — what got demoed, what broke, links to the slides.
- **Project logs** — the tool you're building, including the parts that didn't work.
- **CTF writeups** — during and after competitions.
- **Field notes** — the hardware teardown, the weird packet capture, the config
  that took four hours and one line to fix.

Half-finished is fine. A post that says "I tried this, it didn't work, here's
how far I got" is more useful to the next person than silence, and considerably
more useful than a polished writeup that never gets published.

## Who can post

Anyone who comes to meetups. There's no editorial board, because there's no
board — [the charter](https://github.com/ForbiddenGarden/sasquatch-sh/blob/main/CHARTER.md)
is fairly clear about our enthusiasm for bureaucracy.

Posts are markdown files in the site repo. Drop one in `site/_posts/` named
`YYYY-MM-DD-your-slug.md`, open a pull request, and it goes live when it merges:

```bash
git clone https://github.com/ForbiddenGarden/sasquatch-sh.git
cd sasquatch-sh
cp site/_drafts/example-post.md site/_posts/2026-09-01-my-post.md
$EDITOR site/_posts/2026-09-01-my-post.md
```

The front matter at the top of each file sets the title, author, and tags. Copy
the example and change the values; there is nothing else to configure.

If git is a barrier, it isn't a real barrier — email it to
[sasquatchhackers@gmail.com](mailto:sasquatchhackers@gmail.com) and someone will
open the PR for you. We would rather have your writeup than your commit history.

## The two rules

**One: your work stays yours.** Posting here doesn't hand SSH ownership of
anything. Members retain copyright on their contributions, same as the charter
says, same as it works for group projects on GitHub.

**Two: responsible disclosure.** If you're writing about a vulnerability in
something you don't own, it gets disclosed to the vendor and fixed before it
gets a URL on this domain. This isn't legal advice and it isn't negotiable —
it's the difference between a security group and a liability.

Beyond those two: write like you'd explain it to someone at the table next to
you. That's the entire style guide. No gatekeeping in the meetups, no
gatekeeping in the prose.

## Next up

The [DEF CON debrief](/) is Saturday, August 22, 12:00–2:00 PM at the Monroe
Public Library — talks worth watching, what we saw, what we brought home. If you
went, bring notes. If you didn't, come anyway; that's rather the point of a
debrief.

Someone's going to write it up afterward. It might as well be you.
