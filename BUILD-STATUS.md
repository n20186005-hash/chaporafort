# Build / asset status

## Source-level checks completed

- `package.json` uses exact versions only.
- `pnpm-lock.yaml` importer specifiers match `package.json` exactly.
- `packageManager` is pinned to `pnpm@11.25.0`.
- Node is pinned to `24.20.0` in both `engines` and `.node-version`.
- No `pnpm-workspace.yaml` is present.
- The three prohibited placeholder / extension-URL patterns requested by the brief are absent as literal strings from the project source.
- End-user Astro pages contain no CJK/Han text; visible content is Konkani in Devanagari apart from proper names, URLs, technical metadata and map/service brands.
- Local logo/favicon assets are present.
- Site URL is derived only from Astro `site`, populated from `PUBLIC_SITE_URL`; sitemap integration is disabled when it is empty.

## Clean-install validation blocked by runtime network

The required command was attempted after deleting `node_modules` and `dist`:

`CI=1 corepack pnpm install --frozen-lockfile`

The runtime failed before package installation because DNS/network access to `registry.npmjs.org` is unavailable (`getaddrinfo EAI_AGAIN`). See `VALIDATION-INSTALL.log`.

Because dependencies cannot be installed here, `pnpm check` and `pnpm build` cannot truthfully be reported as executed/passed in this runtime.

## Real-photo asset status

Five verified Wikimedia Commons photo sources and licenses are mapped in `public/images/PHOTO-CREDITS.md`, but this runtime also blocks binary web downloads. Therefore the real JPG bytes are not inside this source-candidate package. The site deliberately uses graceful local fallbacks rather than silently hotlinking external images or substituting generated images.
