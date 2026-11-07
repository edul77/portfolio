# Portfolio

A fast, responsive single-page portfolio site for a Systems Administrator.
Built with plain HTML, CSS, and JavaScript — **no build step, no dependencies.**

## Files

| File         | Purpose                                             |
|--------------|-----------------------------------------------------|
| `index.html` | Page structure and all content                      |
| `styles.css` | Dark "terminal / ops" theme and responsive layout   |
| `script.js`  | Mobile nav toggle + footer year (progressive JS)    |

## Run locally

Just open `index.html` in a browser. For a local server (recommended so
relative paths behave like production):

```powershell
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

## Customize

Everything is placeholder content — edit `index.html` to make it yours:

- **Name & role**: search for `Alex Doe` and the `<title>` tag.
- **About / facts**: `#about` section.
- **Skills**: `#skills` section cards.
- **Certifications**: `#certs` section.
- **Projects**: `#projects` section cards.
- **Contact links**: `#contact` section — update the `mailto:`, GitHub, and
  LinkedIn URLs.

Colors live at the top of `styles.css` under `:root` (CSS variables).

## Deploy

Because it's static, host it anywhere:

- **GitHub Pages**: push to a repo, enable Pages on the branch.
- **Netlify / Vercel**: drag-and-drop the folder or connect the repo.
- **Any web server**: copy the three files to the web root.
