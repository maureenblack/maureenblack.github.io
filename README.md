# Maureen Wepngong

If you clicked through my CV and somehow ended up inspecting the source code, hi.

This repo powers my online CV and professional profile:

**https://maureenblack.github.io**

I’m a software engineer, founder of Giiyo Tech, Cardano standards and governance contributor, and co-author of CPS-0033.

## What's in here

A very simple static site built with:

- HTML
- CSS
- Vanilla JavaScript
- GitHub Pages

No framework. No complicated build pipeline. The CV already has enough going on.

## Writing

The blog runs on Jekyll, which GitHub Pages builds on every push. The site's own HTML and `styles.css` are the theme.

To publish, add one Markdown file to `_posts/`, named `YYYY-MM-DD-the-slug.md`:

```yaml
---
title: "Interest Is Not Demand"
description: "One or two sentences. Used as the standfirst and in search and social previews."
date: 2026-06-09
category: Product          # Product, Building, Technology or Governance
---
```

Commit and push. It appears at `/blog/the-slug/`, on the writing index and, if it's one of the latest three, on the homepage. A 1200x630 image at `assets/social/the-slug.png` becomes its social card; without one it uses the writing card.

Comments run on giscus, stored in this repo's Discussions (Announcements category). Set `giscus.enabled: false` in `_config.yml` to turn them off, or `comments: false` on a single post.

To preview locally: `bundle install`, then `bundle exec jekyll serve`. `./build-cv.sh` rebuilds both CVs.

## Selected work

The site includes some of the work I’m most proud of, including:

- CPS-0033: DRep Voting Power Concentration
- Cardano governance research
- State of Cardano Governance Report
- Giiyo Tech
- Koki

## Live site

**https://maureenblack.github.io**

If you came here looking for the actual CV, the website is much prettier than this README.
