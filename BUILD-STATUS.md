# Build / asset status

_Last updated: 2026-09-03 (round 3 – entity binding & PWA)._

## Source-level checks completed

- `package.json` uses exact versions only.
- `pnpm-lock.yaml` importer specifiers match `package.json` exactly (sharp 0.34.3 added as devDependency).
- `packageManager` is pinned to `pnpm@11.25.0`.
- Node is pinned to `24.20.0` in both `engines` and `.node-version`.
- `pnpm-workspace.yaml` was added because pnpm v11 requires `allowBuilds` (esbuild + sharp) to run
  dependency install scripts; older `onlyBuiltDependencies` is not supported by v11.
- The three prohibited placeholder / extension-URL patterns required by the brief are absent from the project source.
- End-user Astro pages contain no CJK/Han text; visible content is Konkani in Devanagari apart from proper names, URLs, technical metadata and map/service brands.
- Local logo/favicon assets are present.
- Official domain **https://chaporafort.com** is the built-in default of Astro `site` in `astro.config.mjs`
  (`PUBLIC_SITE_URL` may override for CI/preview builds); canonical, og:url and sitemap are therefore always emitted.

## Validation executed in this runtime

Registry + Open-Meteo were reachable, so a real install/build was completed:

- `pnpm install` — clean reinstall succeeded; esbuild & sharp install scripts ran (`allowBuilds`).
- `pnpm check` (astro check) — **0 errors, 0 warnings**（1 hint：`BaseLayout.astro` JSON-LD `<script set:html>` 因带属性
  触发 astro(4000) 提示；该写法即 Astro 官方结构化数据推荐模式，有意保留）。
- `pnpm build` (astro build + `scripts/verify-dist.mjs`) — **passed**: 5 pages built; current gate reports
  `26 files, 2 sitemap files (PWA included)`.
- Build note: the CodeBuddy `NODE_OPTIONS` safe-delete shim intercepts Astro's temp-folder cleanup, so in this runtime
  the build command must be run with `$env:NODE_OPTIONS=''` first (same workaround as other repos in this workspace).

## Round 2 changes (2026-09-03)

New page sections (content added, nothing removed):

- `WeatherSection.astro` (`#हवामान`) — Open-Meteo current weather + 7-day forecast at 15.6046/73.7344,
  Asia/Kolkata; WMO code → Konkani labels; 30-minute localStorage cache; graceful error card; static best-season advice.
- `FacilitiesSection.astro` (`#सुविधा`) — 10 neutral facility categories (toilets, parking, food, stay, shops,
  fuel/EV, ATM/cash, health/pharmacy, mobile, water) with an explicit no-brand / no-recommendation disclaimer.
- `StoriesSection.astro` (`#कथा`) — 5 verified-or-labelled stories/legends with source tags
  (name origin Shahapura→Chapora; 1684/1739 Maratha captures & 1741 border shift; Sambhaji & monitor-lizard local
  legend; Dil Chahta Hai 2001 filming; 1717 rebuild & underground passage).
- History section now includes a year timeline strip (6 entries); FAQ stays at 8 questions (incl. on-site
  facilities, food/stay/fuel); footer gained an in-page anchor quick-nav column; sources gained Wikipedia + HPIP chips.
- Sources documented in `SOURCES.md`; scripts added: `optimize:images` (`scripts/optimize-images.mjs`, sharp).

## Image optimisation

The 5 photos in `public/images` are real JPEGs (verified with sharp). `pnpm optimize:images` compressed them:

- chapora-fort-hero.jpg 3804×2139 — 3,875 KB → 170 KB (-95.6%)
- chapora-fort-interior.jpg 5312×2988 — 4,149 KB → 157 KB (-96.2%)
- chapora-fort-ramparts.jpg 3896×2343 — 1,732 KB → 125 KB (-92.8%)
- chapora-fort-sea-view.jpg 1536×2048 — 586 KB → 176 KB (-70.0%)
- chapora-fort-walls.jpg 4000×3000 — 2,383 KB → 200 KB (-91.6%)
- Total 12.43 MB → 0.81 MB (**-93.5%**), longest edge capped at 1600 px, mozjpeg progressive q82.

## Real-photo asset status

Five verified Wikimedia Commons photo sources and licenses are mapped in `public/images/PHOTO-CREDITS.md`;
the JPEGs themselves are present in `public/images` (original high-res replaced by the compressed versions above).

## Round 3 changes (2026-09-03) – official domain + PWA

Data confirmed to match the latest attraction info supplied: rating 4.2 (27,105), phone +91 832 249 4500,
address `Chapora Fort Trail, Vagator, Anjuna, Chapora, Goa 403509`, coordinates 15.6046375/73.7343882,
Maps short link https://maps.app.goo.gl/3z6axsvdHe2spoFg8 (JSON-LD, visible badge block and Header CTA), and the
provided `pb` embed (map UI language kept as `kok`/`hl=kok&gl=IN` to match the site language; the place id and
coordinates are byte-identical to the supplied embed — restore `zh-CN` segments if exact-match to the source HTML
is required).

- `astro.config.mjs` now defaults `site` to `https://chaporafort.com` (env override still supported); sitemap
  integration always on → `dist/sitemap-index.xml` + `sitemap-0.xml` with the 4 canonical pages (404 excluded).
- `public/robots.txt` added (Allow all + sitemap reference); `.env.example` documents the official domain.
- PWA added: `public/manifest.webmanifest` (start_url `/`, scope `/`, display standalone, theme #71361f,
  background #fffdf8, lang kok-Deva, 3 icons), `public/sw.js` (network-first navigation, offline fallback
  `/index.html`, versioned cache, same-origin only), and icons generated from `apple-touch-icon.png` by
  `scripts/pwa-icons.mjs` into `public/icons/{icon-192,icon-512,maskable-512}.png`.
- `BaseLayout.astro` head: `<link rel="manifest">`, `og:image:alt`, `twitter:image` (absolute); body end registers
  `/sw.js` only in production hosts (dev `localhost` excluded without embedding the banned literal in output).
- `scripts/verify-dist.mjs` extended into the permanent gate: it now also asserts manifest JSON validity, icon
  presence + PNG byte-level dimensions vs declared sizes, `sw.js` fetch listener and `robots.txt` sitemap ref.
- Validation in this runtime: `pnpm check` 0 errors / 0 warnings (1 pre-existing hint), `pnpm build` passes
  (`26 files, 2 sitemap files (PWA included)`), dist inspected for canonical/og/twitter/SW registration.
- Remaining: Konkani copy native-speaker review; optional restore of the exact `zh-CN` iframe language segment.

## Round 4 (2026-09-03) – code-compliance audit (auto-generated checklist)

Per-category evidence checks against the live source + freshly built `dist/` (all PASS unless noted):

- JSON-LD: `dist/index.html` now emits **5 parseable blocks** – Organization(#organization, logo /logo.svg),
  WebSite(#website, publisher → org), WebPage(#webpage, datePublished/dateModified 2026-09-03, about → #chapora-fort,
  primaryImageOfPage hero), TouristAttraction(@id absolute, rating 4.2/27,105, geo 15.604637485/73.734388177,
  hasMap maps.app.goo.gl/3z6axsvdHe2spoFg8, NAP +91 832 249 4500, openingHours 10:00–17:00, sameAs 3),
  FAQPage(8 mainEntity == 8 visible `<details>`). ADDED this round: Organization/WebSite/WebPage nodes.
- 开放时间: schema mirrors the visible copy, which attributes 10:00–17:00 to the Google Maps listing with a
  “confirm before you go” caveat — no official-source claim invented; **REVIEW**: confirm vs live Google listing before launch.
- E-E-A-T: Organization/WebSite/WebPage nodes now present; editorial independence + provenance + photo-credit +
  neutral-facilities disclaimers visible (Footer / facilities aside / legal pages); sources listed in visible chips.
- sitemap/robots: `sitemap-0.xml` 4 absolute URLs (404 excluded), no `<lastmod>` drift; `robots.txt` Allow + sitemap-index.
- 图片署名: `public/images/PHOTO-CREDITS.md` maps all 5 local JPEGs to Wikimedia files/authors/licenses; terms page has
  `#चित्र-हक्क` section; 5 `<img>` in index all carry descriptive `alt`.
- GA4 同意门控: only consent-gated dynamic loader (localStorage `chapora-consent-v1` → gtag G-HXM22WWPKP,
  anonymize_ip) in BaseLayout + settings form on `/cookies/`; `ca-pub`/ads/placeholder/TODO tokens zero across source.
- PWA: manifest(start_url `/`, kok-Deva, theme #71361f) valid; icons 192/512/maskable-512 byte-dimension checked;
  sw.js fetch/activate/install + same-origin guard; registration excludes localhost without banned literal.
- 404: page exists, noindex,follow; wrangler `not_found_handling: 404-page`.
- 官方外链: all `target="_blank"` links carry `rel="noopener noreferrer"` (0 misses); sources are gov/GTDC/gov.in
  Ministry/Wikipedia/HPIP; no third-party ad or sponsored links.
- 语言一致性: `<html lang="kok-Deva">` on all 5 pages; **0 Han characters in any built HTML**; no CJK in `.astro` sources.
- 锚点/UX: Header 5 + Footer 9 in-page links all resolve to existing `id` sections; `section[id]{scroll-margin-top:5rem}`
  added this round for sticky-header offset.
- Repo hygiene: `preview.err`/`preview.log` added to `.gitignore`; BUILD-STATUS stale counts corrected (FAQ 8, timeline 6,
  gate “26 files/2 sitemap”); DOMAIN-SUGGESTIONS marks chaporafort.com as the decided domain.
- Toolchain evidence this round: `pnpm check` 0 errors / 0 warnings (1 intentional LD-script hint);
  `pnpm build` passes the extended `verify-dist.mjs` gate (26 files, 2 sitemap, PWA + structured data).
  hero `fetchpriority` TS2322 已移除，read_lints 全工作区 0 errors。
