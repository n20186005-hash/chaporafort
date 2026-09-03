# चापोरा किल्ला प्रवासी मार्गदर्शक

Astro + Tailwind CSS + TypeScript वर आधारित, Cloudflare Workers खातीर तयार केल्लो स्वतंत्र पर्यटन माहिती प्रकल्प.

## आवृत्त्या
- Node.js 24.20.0
- pnpm 11.25.0
- Astro 7.2.4
- @astrojs/sitemap 3.7.3
- Tailwind CSS / @tailwindcss/vite 4.3.3
- TypeScript 6.0.3
- @astrojs/check 0.9.10
- Wrangler 4.127.1 (तैनातीवेळी `pnpm dlx` मार्फत अचूक आवृत्ती)

## डोमेन
अधिकृत डोमेन: **https://chaporafort.com**. `astro.config.mjs` मधल्या Astro `site` फील्डांत हेंच मूल्य आसा;
जर `PUBLIC_SITE_URL` पर्यावरण चल दवरल्यार तें (उदा. CI / तात्पुरतें प्रेव्ह्यू डोमेन) प्राधान्यान वापरतात.
Canonical, og:url, sitemap आनी robots.txt सगळीं कायम उत्पन्न जातात.

## स्थानिक विकास
```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## छायाचित्र संपीडन
`public/images` मधली JPEG छायाचित्रां `sharp` वापरून सगळ्यांत व्हड बाजू 1600px मेरेन
(mozjpeg progressive q82) संपीडन करपा खातीर:

```bash
pnpm optimize:images
```

## पानांतलीं प्रकरणां
Hero → इतिहास (काळ-ओळ सयत) → भेट नियोजन → **हवामान (Open-Meteo, 7 दीस)** → प्रवास →
**सुविधा (प्रकार-आधारीत, शिफारस ना)** → नकाशो → भोंवतणी → **कथा आनी कल्पित कथा** →
भेटेची यादी → प्रश्नोत्तर → संदर्भ → Footer. हवामान विभाग ब्राउझर Open-Meteo कडल्यान
माहिती हाडटा आनी ३० मिनिटां खातीर कॅश दवरता; स्थिर होस्टिंगाक लागून सर्व्हर रनटाइम ना.

## Cloudflare Workers
`wrangler.jsonc` Workers runtime खातीर दिलां (static assets, `dist/`). डोमेन `chaporafort.com`
वरवीं Cloudflare account मध्ये binding जाता.

```bash
pnpm deploy
```

## PWA
`public/manifest.webmanifest` (start_url `/`, theme #71361f), `public/sw.js`
(नेव्हिगेशन network-first + `/index.html` आड ऑफलाइन), आनी
`public/icons/{icon-192.png,icon-512.png,maskable-512.png}` (स्रोत `apple-touch-icon.png`).
नवें icons बदलपा खातीर: `node scripts/pwa-icons.mjs`. हो पेज मोबाईल/डेस्कटॉप वयर
स्वतंत्र अॅप म्हणून install करूंक येता.

## गोपनीयता आनी GA4
GA4 मोजणी आयडी `G-HXM22WWPKP` आसा. विश्लेषण स्क्रिप्ट फकत `/cookies/` पानार वापरकर्त्यान विश्लेषण मान्य केल्या उपरांतच लोड जाता.

## नकाशो
गुगल नकाशा iframe कोंकणी/भारत मांडावळीन (`hl=kok`, `gl=IN`) दिला आसा.
