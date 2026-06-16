# Content Management Guide

This document explains how to manage and update content on your personal website.

---

## Table of Contents

1. [Adding a Blog Post](#adding-a-blog-post)
2. [Editing the About Page](#editing-the-about-page)
3. [Managing Honors](#managing-honors)
4. [Managing Work Experience](#managing-work-experience)
5. [Managing Teaching Assistant Entries](#managing-teaching-assistant-entries)
6. [Managing Olympiad Teaching](#managing-olympiad-teaching)
7. [Managing Publications](#managing-publications)
8. [Managing Projects](#managing-projects)
9. [Adding Section Images](#adding-section-images)
10. [Changing Social Links](#changing-social-links)
11. [Changing Site Settings](#changing-site-settings)
12. [Previewing Changes](#previewing-changes)
13. [Building & Deploying](#building--deploying)

---

## Adding a Blog Post

1. **Create a new markdown file** in `src/content/posts/`. Name it with a URL-friendly slug, e.g., `my-new-post.md`.

2. **Add frontmatter** at the top of the file:

```markdown
---
title: "My New Post"
published: 2026-06-16
draft: false
description: "A short description for search engines and previews."
tags: ["tag1", "tag2"]
---

Your post content here...
```

> **Note**: Set `draft: false` to publish. Use `draft: true` to hide a post.

3. **Preview locally** — see [Previewing Changes](#previewing-changes).

4. **Available frontmatter fields**:

| Field         | Required | Description                                      |
|---------------|----------|--------------------------------------------------|
| `title`       | Yes      | Post title                                       |
| `published`   | Yes      | Publication date (`YYYY-MM-DD`)                  |
| `draft`       | No       | Defaults to `false` — set `true` to hide post    |
| `description` | No       | Meta description for SEO/search                  |
| `tags`        | No       | Array of strings, e.g. `["algorithms", "python"]`|
| `image`       | No       | Path to hero image, e.g. `"/images/hero.png"`   |

---

## Editing the About Page

The About page has two parts:

### 1. The Bio (Markdown)

Edit `src/content/spec/about.md`:

```markdown
# About Me

Your biography text goes here...

## Research Interests

- Interest one
- Interest two
```

### 2. The Sections (Data Files)

After the bio, the About page automatically renders sections in this order:
1. **Honors** — see [Managing Honors](#managing-honors)
2. **Work Experience** — see [Managing Work Experience](#managing-work-experience)
3. **Olympiad Teaching** — see [Managing Olympiad Teaching](#managing-olympiad-teaching)
4. **Teaching Assistant** — see [Managing Teaching Assistant Entries](#managing-teaching-assistant-entries)
5. **Publications** — see [Managing Publications](#managing-publications)
6. **Projects** — see [Managing Projects](#managing-projects)

To change the section order, edit `src/pages/about.astro` and reorder the component imports/usage.

---

## Managing Honors

**File**: `src/data/experience.ts` — the `honors` array inside the `experience` object.

### Interface

```typescript
interface Honor {
  title: string;       // Display title, e.g. "Gold Medal — Informatics Olympiad"
  year: number;        // Year received
  description: string; // Brief description
  emoji: string;       // Emoji icon: "🥇" for gold, "🥉" for bronze, "🏆" for others
}
```

### Example

```typescript
honors: [
  {
    title: "Gold Medal — Iran National Olympiad in Informatics",
    year: 2019,
    description: "First place in the national informatics competition.",
    emoji: "🥇",
  },
]
```

To add a new honor, simply append a new object to the `honors` array.

---

## Managing Work Experience

**File**: `src/data/experience.ts` — the `work` array inside the `experience` object.

### Interface

```typescript
interface WorkExperience {
  role: string;          // Job title
  company: string;       // Company name
  location: string;      // City, Country
  startDate: string;     // e.g. "February 2025"
  endDate: string;       // e.g. "Present" or "June 2025"
  description: string;   // Paragraph describing the role
  highlights: string[];  // Bullet points of key achievements
}
```

### Example

```typescript
work: [
  {
    role: "Backend Developer",
    company: "Tabdeal",
    location: "Tehran, Iran",
    startDate: "February 2025",
    endDate: "Present",
    description: "Developing and maintaining backend services...",
    highlights: [
      "Designing and configuring Nginx",
      "Managing Kubernetes clusters",
    ],
  },
]
```

To add a new entry, append a new object to the `work` array.

---

## Managing Teaching Assistant Entries

**File**: `src/data/experience.ts` — the `ta` array inside the `experience` object.

### Interface

```typescript
interface TAExperience {
  course: string;      // Course name, e.g. "Design of Algorithms"
  instructor: string;  // Instructor name with title, e.g. "Dr. Hamidreza Zarrabi-Zade"
  term: string;        // e.g. "Fall 2022"
}
```

### Example

```typescript
ta: [
  {
    course: "Design of Algorithms",
    instructor: "Dr. Hamidreza Zarrabi-Zade",
    term: "Fall 2022",
  },
]
```

> **Note**: The TA section shows the first 4 items by default with a "Show N More" button to expand. This button only appears if there are more than 4 entries. To change the initial count, edit the `initialCount` prop in `src/components/sections/TASection.astro`.

---

## Managing Olympiad Teaching

**File**: `src/data/experience.ts` — the `olympiadTeaching` array inside the `experience` object.

### Interface

```typescript
interface OlympiadTeaching {
  role: string;        // e.g. "Olympiad in Informatics Teacher"
  years: string;       // e.g. "2020–2024"
  description: string; // Description of the teaching activity
}
```

### Example

```typescript
olympiadTeaching: [
  {
    role: "Olympiad in Informatics Teacher",
    years: "2020–2024",
    description: "Teaching excellent high school students...",
  },
]
```

---

## Managing Publications

**File**: `src/data/publications.ts`

### Interface

```typescript
interface Publication {
  title: string;          // Full publication title
  venue: string;          // Conference/journal name
  year: number;           // Publication year
  collaborators: string[]; // Co-author names with affiliations
  description: string;     // Brief description of the work
  image?: string;          // Optional image path, e.g. "/images/pub-thumb.png"
  links: {
    googleScholar?: string; // Google Scholar URL
    arxiv?: string;         // arXiv URL
    doi?: string;           // DOI URL
    projectPage?: string;   // Project page URL
  };
}
```

### Example

```typescript
export const publications: Publication[] = [
  {
    title: "What is the chance of being so unfair?",
    venue: "WWW 2025",
    year: 2025,
    collaborators: ["Prof. Samira Hossein Ghorban (IPM, Tehran)", "..."],
    description: "We define a novel fairness measure...",
    links: {
      googleScholar: "https://scholar.google.com/...",
    },
  },
]
```

To add a publication, append a new object to the array.

---

## Managing Projects

**File**: `src/data/projects.ts`

### Interface

```typescript
interface Project {
  title: string;          // Project name
  description: string;    // Description of the project
  tech: string[];         // Technologies used, e.g. ["Python", "Graph Theory"]
  image?: string;         // Optional image path, e.g. "/images/project.png"
  links: {
    github?: string;      // GitHub URL
    live?: string;        // Live demo URL
    docs?: string;        // Documentation URL
  };
}
```

### Example

```typescript
projects: [
  {
    title: "Olympiad Graph Theory Book",
    description: "Co-authored a 200-page online book...",
    tech: ["LaTeX", "Graph Theory"],
    links: {
      live: "https://gtoi.shaazzz.ir/",
    },
  },
]
```

---

## Adding Section Images

1. **Place image files** in the `public/images/` directory (create it if it doesn't exist).

2. **Reference in data files** using the path `/images/filename.jpg`:

```typescript
// In src/data/publications.ts or src/data/projects.ts
{
  title: "...",
  image: "/images/my-image.jpg",  // <-- add this field
}
```

Supported formats: JPEG, PNG, WebP, GIF.

---

## Changing Social Links

**File**: `src/config.ts`

Find the `socialLinks` array and edit or add entries:

```typescript
socialLinks: [
  { title: "GitHub", href: "https://github.com/yourusername", icon: "fa6-brands:github" },
  { title: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "fa6-brands:linkedin" },
]
```

Icons use the [Iconify](https://icon-sets.iconify.design/) system. Find icons at `fa6-brands:*` or `material-symbols:*` collections.

---

## Changing Site Settings

**File**: `src/config.ts`

| Setting      | Description                                      |
|--------------|--------------------------------------------------|
| `title`      | Site title (shown in browser tab, RSS, etc.)     |
| `subtitle`   | Tagline shown in sidebar                         |
| `hue`        | Theme color (0-360). Blue = 220.                 |
| `siteUrl`    | Your domain — affects RSS, sitemap, social cards |

To change the navigation bar links, edit `linkPresets` and `navbar` in the same file.

---

## Previewing Changes

```bash
pnpm dev
```

Opens at `http://localhost:4321`. The dev server auto-reloads on file changes.

---

## Building & Deploying

```bash
pnpm build
```

Output goes to the `dist/` folder. Deploy `dist/` to any static host (Vercel, Netlify, GitHub Pages, etc.).

The project includes a `vercel.json` — for Vercel deployment, connect your GitHub repository directly.