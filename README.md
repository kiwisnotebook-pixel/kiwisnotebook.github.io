# Kiwi's Notebook — static site skeleton

What I added
- Root HTML pages: `index.html`, `services.html`, `process.html`, `about.html`, `contact.html`
- `style.css` in repo root (all pages link to this file)
- `assets/icons/favicon.svg`
- This README with deployment hints

Suggested project layout
```
/ (repo root)
  index.html
  services.html
  process.html
  about.html
  contact.html
  style.css
  assets/
    icons/
      favicon.svg
    images/
      (put images here)
```

Notes and next steps
- If you want CSS in a folder, move `style.css` to e.g. `assets/css/style.css` and update each HTML's `<link rel="stylesheet">` accordingly.
- Replace the placeholder email in `contact.html` with your real contact address.
- If you want a contact form, I can add a Formspree or Netlify Forms integration — tell me which provider you prefer.
- To publish on GitHub Pages (user site):
  - Since your repo is `kiwisnotebook.github.io` (a user/organization site), publish from the `main` branch root (no docs folder). GitHub Pages will serve index.html from the root automatically.
  - Ensure branch is `main` and Pages is set to serve from `main` / root (or switch branch if needed).
- Accessibility: I added `aria-current` on the nav for the current page in each file. Consider adding skip navigation links for keyboard users if you add more UI complexity.

If you want, I can:
- Convert the repeating header/footer into a templating setup (Jekyll includes or a simple build step) so you only maintain one header and footer.
- Add example images, thumbnail styles, or a contact form (Formspree/Netlify).
- Move CSS into an assets folder and adjust links across pages.

Tell me which of the above you'd like next (templating, contact form, images, or deployment help) and I’ll update the files.
