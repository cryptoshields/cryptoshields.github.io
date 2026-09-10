# CLAUDE.md — cryptoshields.github.io

Orientation for a Claude session started in this directory.

## What this is

The **CryptoShields public marketing / hub site** — "Web3 Security & OPSEC".
Static site served by **GitHub Pages** from this repo (`cryptoshields.github.io`),
so whatever is on `main` is live at `https://cryptoshields.github.io`.

- **Owner / identity:** CryptoShields (`realcryptoshields@gmail.com`) — resolves
  from the `github-cryptoshields` remote.
- **Deploy:** push to `main` → GitHub Pages publishes automatically. No build.

## Layout

| Path | Role |
|---|---|
| `index.html` | Main landing page — single self-contained file, inline `<style>`, Google Fonts (Share Tech Mono / Barlow). Dark hacker-console aesthetic (`--cyan` / `--red` on near-black) |
| `start.html`, `browsertesting.html` | Secondary / scratch pages |
| `Zircuit.html` + `Zircuit_files/` | A saved / mirrored Zircuit page (campaign or reference) |
| `css/`, `js/`, `fonts/`, `img/` | Shared assets |
| `Shields.jpg` | Brand image |

## Working rules

- Pure HTML/CSS/JS, no framework, no build step. Edit files directly.
- CryptoShields is a brand name — the owner's personal name is deliberately kept
  out of all public-facing material. Don't reintroduce it in copy, comments, or
  metadata.
- Test by opening the HTML file locally; it's all client-side.
- Related projects that this site links to / showcases:
  `malware-simulation`, `web3-wargame`, `x-tracker` (X-Ray Vision),
  `fossils-of-consensus`.
