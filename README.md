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
एकमेव संकेतथळ आधार `astro.config.mjs` मधल्या Astro `site` फील्डान नियंत्रित जाता. मूल्य `PUBLIC_SITE_URL` पर्यावरण चलांतून येता. रिकामें ठेवल्यार canonical / og:url वगळले जातात आनी sitemap integration सुरू जावना; build अडना.

## स्थानिक विकास
```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Workers
`wrangler.jsonc` Workers runtime खातीर दिलां. उत्पादनात डोमेन ठरल्यावर Cloudflare build environment मध्ये `PUBLIC_SITE_URL` दवरात.

```bash
pnpm deploy
```

## गोपनीयता आनी GA4
GA4 मोजणी आयडी `G-HXM22WWPKP` आसा. विश्लेषण स्क्रिप्ट फकत `/cookies/` पानार वापरकर्त्यान विश्लेषण मान्य केल्या उपरांतच लोड जाता.

## नकाशो
गुगल नकाशा iframe कोंकणी/भारत मांडावळीन (`hl=kok`, `gl=IN`) दिला आसा.
