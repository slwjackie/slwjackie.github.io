# Jackie Kim — Research Portfolio

A static academic portfolio introducing Jackie Kim’s background, ongoing research, and research repositories.

Intended website address after GitHub Pages is enabled: https://slwjackie.github.io/

## GitHub Pages setup

1. The repository must be named `slwjackie.github.io` under the `slwjackie` account. If it has a different name, open **Settings → General**, change **Repository name** to `slwjackie.github.io`, and click **Rename**.
2. These site files belong at the repository root on the `main` branch.
3. In **Settings → Pages → Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select **main** and **/ (root)**, then click **Save**.
5. Once deployment succeeds, open https://slwjackie.github.io/.

The site uses plain HTML, CSS, JavaScript, and SVG. No build step is required. `.nojekyll` keeps deployment static.

## Files

- `index.html`: portfolio content and links
- `styles.css`: layout and styling
- `script.js`: email copying and navigation state
- `field.svg`: conceptual research illustration
- `favicon.svg`: site icon

## Updating the portfolio

Edit `index.html` to update the biography, research descriptions, and links. Edit `styles.css` to change colors, typography, spacing, or layout. Add photos or figures to an `images/` folder and reference them from the HTML. Changes committed to `main` are published automatically once Pages is configured.
