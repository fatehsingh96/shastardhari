# Shastardhari — Astro + Cloudflare Pages

Your portfolio site for antique Indo-Persian arms and armour.

---

## Quick Start

### 1. Install Node.js

Download and install from https://nodejs.org (use the LTS version).

### 2. Install dependencies

Open your terminal, navigate to this folder, and run:

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

This starts a local dev server at `http://localhost:4321`. Open it in your browser.

### 4. Build for production

```bash
npm run build
```

This creates a `dist/` folder with your static site ready to deploy.

---

## Project Structure

```
shastardhari/
├── public/                  ← Static files (images go here)
│   ├── favicon.svg
│   └── images/              ← Create this folder, add your photos here
│       ├── powder-flask-cover.jpg
│       ├── powder-flask-2.jpg
│       └── ...
├── src/
│   ├── components/
│   │   ├── Header.astro     ← Site header & navigation
│   │   └── Footer.astro     ← Site footer
│   ├── content/
│   │   └── items/           ← YOUR ITEMS LIVE HERE (one .md file per item)
│   │       ├── powder-flask.md
│   │       ├── wootz-khanjar.md
│   │       └── ...
│   ├── layouts/
│   │   └── Base.astro       ← Page wrapper (head, body, etc.)
│   ├── pages/
│   │   ├── index.astro      ← Homepage / Inventory
│   │   ├── sold.astro       ← Sold items page
│   │   ├── enquire.astro    ← Contact form
│   │   └── items/
│   │       └── [slug].astro ← Item detail page (auto-generated)
│   ├── styles/
│   │   └── global.css       ← All styles
│   └── content.config.ts    ← Defines the item data structure
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## How to Add, Edit, or Sell Items

### Adding a new item

1. Add your photos to `public/images/`
2. Create a new `.md` file in `src/content/items/`. Example:

```markdown
---
title: "Afghan Pesh Kabz"
origin: "Afghanistan"
period: "Mid 19th Century"
status: "available"
coverImage: "/images/afghan-pesh-kabz-cover.jpg"
images:
  - "/images/afghan-pesh-kabz-2.jpg"
  - "/images/afghan-pesh-kabz-3.jpg"
order: 5
---

Your description goes here. You can write multiple paragraphs.

Each paragraph is separated by a blank line.
```

The fields between the `---` lines are the metadata:
- **title**: Name of the piece
- **origin**: Where it's from
- **period**: When it was made
- **status**: Either `available` or `sold`
- **coverImage**: Path to the main photo (relative to `public/`)
- **images**: Additional photos (optional, can be empty `[]`)
- **order**: Controls sort order (lower numbers appear first)

### Marking an item as sold

Open the item's `.md` file and change `status: "available"` to `status: "sold"`. That's it — it will move from the Inventory page to the Sold page automatically.

### Removing an item

Delete its `.md` file from `src/content/items/`.

---

## Setting Up the Contact Form

The enquiry form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month).

1. Create a free account at https://formspree.io
2. Create a new form — you'll get an endpoint like `https://formspree.io/f/xabcdefg`
3. Open `src/pages/enquire.astro`
4. Replace `YOUR_FORM_ID` with your actual form ID

---

## Deploying to Cloudflare Pages

### First time setup

1. Push this project to a GitHub repository
2. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create**
3. Select **Pages** → **Connect to Git**
4. Select your repository
5. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

### Connecting your domain

1. In Cloudflare dashboard, go to **Workers & Pages** → your project → **Custom domains**
2. Add `shastardhari.com`
3. If your domain is already on Cloudflare DNS, it will auto-configure
4. If not, update your domain's nameservers to Cloudflare's (they'll tell you which ones)

### How updates work

After the initial setup, every time you push changes to GitHub, Cloudflare will automatically rebuild and deploy your site. The process takes about 30 seconds.

So your workflow becomes:
1. Edit a markdown file or add images
2. `git add . && git commit -m "added new item" && git push`
3. Site updates automatically

---

## Photo Tips

- Use JPG format for photos
- Aim for around 1200px wide — large enough to look sharp, small enough to load fast
- Keep file names lowercase with hyphens: `powder-flask-cover.jpg`
- The cover image appears in the grid, so pick the best angle

---

## Monthly Cost

| Service | Cost |
|---------|------|
| Cloudflare Pages hosting | $0 |
| Formspree contact form (free tier) | $0 |
| Domain renewal (annual) | ~$10-15/year |
| **Total** | **~$1/month** |

Compare to your current $55/month on Squarespace + Google Workspace.
