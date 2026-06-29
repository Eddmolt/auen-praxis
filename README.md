# Auen-Praxis Website

Static first public draft for `auen-praxis.de`, built from Christian Bahr's Gmail content dated 2026-06-05.

## Local preview

```bash
cd "/Users/samikaraa/Documents/New project/firmen/auen-praxis/website"
python3 -m http.server 4173
```

## Deploy

```bash
cd "/Users/samikaraa/Documents/New project/firmen/auen-praxis/website"
wrangler pages deploy . --project-name auen-praxis --commit-dirty=true
```

## Current live status

- Cloudflare Pages project: `auen-praxis`
- Preview/live Pages URL: `https://auen-praxis.pages.dev`
- Cloudflare Pages custom domains have been created for:
  - `auen-praxis.de`
  - `www.auen-praxis.de`
- Current verification status: pending because DNS still points to STRATO/RZONE.

## DNS needed at the current provider

Current nameservers are `docks15.rzone.de` and `shades18.rzone.de`, so DNS must be changed at STRATO/RZONE unless the domain is moved to another provider first.

Minimum required record for `www`:

```text
Type: CNAME
Name: www
Target: auen-praxis.pages.dev
```

For the root domain `auen-praxis.de`, use one of these options:

- Preferred: move nameservers/DNS to Cloudflare and let Cloudflare connect the apex domain.
- Alternative if the current provider supports it: set root/apex CNAME or ALIAS/ANAME flattening to `auen-praxis.pages.dev`.
- If neither is supported: keep `www.auen-praxis.de` as the website and set a provider-level redirect from `auen-praxis.de` to `https://www.auen-praxis.de`.

## Before final domain launch

- Replace placeholder Impressum and Datenschutz with approved legal text.
- Confirm real contact email, phone, address, professional title/legal disclosures, and fee wording.
- Remove `Disallow: /` from `robots.txt` and remove `X-Robots-Tag: noindex` in `_headers` after approval.
- Verify whether generated images may be used as symbolic practice imagery, or replace them with real practice/doctor photos before public launch.
- Add verified address, phone, opening/appointment information and professional disclosures to the JSON-LD only after they are approved.
- Keep the emergency notice visible and review GOÄ/private-fee wording before enabling search indexing.
