# Ankit Anand — UX Designer Portfolio

A React + Vite portfolio site with case studies (Behance/Figma), micro-interactions, and responsive layout.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to GitHub Pages

The repo is set up to deploy to GitHub Pages via GitHub Actions.

### One-time setup

1. **Create a GitHub repo** and push this project (e.g. `ankit-portfolio` or `ankit-anand`).

2. **Turn on GitHub Pages**
   - Repo → **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. **Push to `main` or `master`**  
   The workflow runs on every push to `main`/`master`, builds the site with the correct base path, and deploys it.

Your site will be live at:

**`https://<your-username>.github.io/<repo-name>/`**

Example: if the repo is `ankit-portfolio`, the URL is  
`https://yourusername.github.io/ankit-portfolio/`.

### Deploying from a different branch

Edit `.github/workflows/deploy.yml` and change:

```yaml
on:
  push:
    branches: [main, master]   # add or change the branch name
```

### Custom domain (optional)

In **Settings → Pages**, set **Custom domain** to your domain and follow the DNS instructions.
