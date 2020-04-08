# Insights
The insights are created through markdown files found in `app/_posts`. HTML is allowed in the insight content.
Each file should be named according to `YYYY-MM-DD-<title>.md` all lowercase with no spaces.

## Base structure

This is the base structure:
```
---
layout: post
published:
featured:

title:
category;
author:

images:
  hero:
  card:

summary:
---

Content goes after the frontmatter variables. HTML is allowed.
```


## YAML Variables
Below is an explanation of all variables used by the insights.

### Jekyll
```
layout: post
published:
featured:
```
These variables are needed by jekyll.
`layout` will always be `post`
`published` controls whether a insight is published. If false, no page is going to be created and it won't show up on the list page.
`featured` is used to feature a insight in the `/blog`. If more than one insights have a featured tag, the most recent one is shown.

### Insight
```
title:
category;
author:

images:
  hero:
  card:

summary:
```
- `title` (string) is used as the page title everywhere is needed, including cards.
- `category` (string) appears as a suptitle
- `author` (string) shown on the cards, below the title
- `images` (object) requires 2 different images for different purposes
- `images.hero` (string) is displayed for featured insights and on each post page
- `images.card` (string) is used for the cards on `/blog` page
- `summary` (string) excerpt of the post to display on the `/blog` page. If not provided the first 40 words are displayed instead. Only used for `featured` insights.