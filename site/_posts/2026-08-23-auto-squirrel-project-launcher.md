---
title: "Auto Squirrel: Stop Clicking Through Four Dashboards to Ship a Domain"
author: Nelson
date: 2026-08-23 18:00:00 -0700
tags: [tooling, devops, oss]
description: "Standing up shadyfans.world and sasquatch.sh by hand meant the same registrar-DNS-GitHub-Vercel dance every time. Auto Squirrel is the tool that does it from one plan file instead — dry-run by default, deterministic, and honest in the source about which registrar integrations it hasn't verified yet."
---

![Auto Squirrel logo — a cyberpunk squirrel clutching a glowing acorn, tail rendered as a spiral of DNS record types](/images/auto-squirrel-logo.png)

I've now stood up two sites by hand — shadyfans.world and this one, sasquatch.sh. Same dance both times: registrar dashboard to grab the domain, another tab to point DNS somewhere sane, GitHub to make the repo, Vercel to wire it up and attach the domain, and a round or two of "wait, which nameservers." None of it is hard. All of it is the kind of repetitive clicking that eats twenty minutes you don't get back, per project, forever.

So: **Auto Squirrel**. One YAML file describing a project, and it registers the domain, configures DNS, creates the GitHub repo, and wires up a Vercel deployment with the domain and env vars attached. [It's public now.](https://github.com/ForbiddenGarden/auto-squirrel)

## The plan file is the whole interface

```yaml
project_name: "cool-new-project"
domain: "coolnewproject.dev"
registrar: "porkbun"
dns_provider: "cloudflare"

github:
  owner: "your-github-username-or-org"
  repo: "cool-new-project"
  local_path: "./cool-new-project"

vercel:
  project_name: "cool-new-project"
  env:
    NODE_ENV: "production"
```

That's most of it. Fill in a registrant contact block, run `auto-squirrel plan.yaml`, and it prints exactly what it would do — nothing gets created or charged until you add `--apply`, and even then it makes you type the domain name back before it'll place a real order. Here's what a real dry run actually looks like, straight off this repo's own test plan:

![Terminal output of a full auto-squirrel dry run across all four providers](/images/auto-squirrel-dry-run.png)

## Deterministic, on purpose

The word doing the most work in the README is "deterministic." There's no AI in the execution path — no model deciding what domain sounds good, no autonomous anything. You write the plan, every step maps to one specific, readable API call, and dry-run is the default rather than something you have to remember to ask for. That was a deliberate design constraint, not a limitation I ran out of time to fix: a tool that touches domain registration, DNS, and deployment infrastructure should be boring and legible, not clever. If you can't read the diff between "what it would do" and "what it did," it shouldn't be running against anything that costs money.

## Building it honestly meant admitting what I couldn't verify

Eight registrars, seven DNS providers, GitHub, Vercel. Registrar APIs are exactly the kind of thing that drift out from under whatever's in a model's training data — GoDaddy, for instance, moved to a genuinely different v3 quote-then-execute registration flow at some point, and the old-style docs you'll find with a casual search still describe the previous one. So each integration got checked against current docs where that was actually possible, live, rather than trusted from memory.

Two of them — Porkbun and Hostinger — I couldn't pin down a confirmed registration endpoint for at all, even after digging. Rather than ship a guess and hope, those two ship with a `_VERIFIED` flag sitting in the source that has to be hand-flipped, after you've actually confirmed the endpoint yourself, before `register()` will place a real order. It refuses outright otherwise. Namecheap's the one integration that's actually been proven end-to-end against a live sandbox — availability check, price quote, and a full simulated registration, all real API round-trips — and that testing pass caught two genuine bugs a code review alone wouldn't have: `.env` wasn't actually being loaded into the process at all (the whole credentials setup was decorative until that got wired up), and a dry-run message that told you to pass `--sandbox` when you'd already passed it.

None of that would've surfaced without actually running it against something real. Worth remembering next time "the code looks right" feels like enough.

## What it won't do

No cloning a target site — there's no URL-to-clone input anywhere in the tool, only a local directory or a template repo you already own. No bulletproof/abuse-resistant hosting providers, and I mean that specifically: that's a term of art for infrastructure that markets itself on ignoring abuse reports, and it has no legitimate place in a project-launcher regardless of how the request for it gets framed. This is a tool for standing up infrastructure for something you're actually building, not for finding or reproducing anyone else's.

## Try it

```bash
git clone https://github.com/ForbiddenGarden/auto-squirrel.git
cd auto-squirrel && python3 -m venv .venv && source .venv/bin/activate
pip install .
cp .env.example .env && cp project.example.yaml myproject.yaml
```

If you register domains through something Auto Squirrel doesn't support yet, the `Registrar` and `DNSProvider` interfaces are three and two methods respectively — adding a provider is a small, self-contained PR, and the README spells out the pattern the existing ones follow (dry runs should exercise the real API as far as possible without spending money, and anything you can't verify should say so loudly in the source instead of pretending to be sure).

Next project I stand up, this is doing the clicking instead of me.
