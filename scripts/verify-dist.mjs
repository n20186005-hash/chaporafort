// dist 产物校验：禁用词扫描 + sitemap 检查 + PWA 资源完整性（manifest / icons / sw / robots）。
import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const banned = ['exam' + 'ple.com', 'local' + 'host', 'chrome-' + 'extension://'];

async function walk(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    const p = join(dir, name);
    const s = await stat(p);
    if (s.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = await walk(root);
let bad = false;

for (const file of files) {
  if (!/\.(html|js|css|xml|txt|json)$/i.test(file)) continue;
  const text = await readFile(file, 'utf8');
  for (const token of banned) {
    if (text.includes(token)) {
      console.error(`बंदी असलेला मजकूर: ${token} -> ${file}`);
      bad = true;
    }
  }
}

const sitemapFiles = files.filter((f) => /sitemap.*\.xml$/i.test(f));
for (const file of sitemapFiles) {
  const text = await readFile(file, 'utf8');
  if (/<lastmod>/i.test(text)) {
    console.error(`अनावश्यक lastmod: ${file}`);
    bad = true;
  }
  if (new RegExp(['exam' + 'ple\\.com', 'local' + 'host'].join('|'), 'i').test(text)) {
    console.error(`अवैध sitemap URL: ${file}`);
    bad = true;
  }
}

// PWA: manifest 有效、icons 尺寸与声明一致、sw.js/robots.txt 在产物体内。
const manifestPath = join(root, 'manifest.webmanifest');
if (!existsSync(manifestPath)) {
  console.error('PWA: manifest.webmanifest गायब');
  bad = true;
} else {
  let manifest = null;
  try {
    manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  } catch {
    console.error('PWA: manifest.webmanifest JSON अवैध');
    bad = true;
  }
  if (manifest && Array.isArray(manifest.icons) && manifest.icons.length > 0) {
    for (const icon of manifest.icons) {
      const p = join(root, icon.src.replace(/^\//, ''));
      if (!existsSync(p)) {
        console.error(`PWA: icon गायब ${icon.src}`);
        bad = true;
        continue;
      }
      const b = readFileSync(p);
      const sig = [137, 80, 78, 71, 13, 10, 26, 10].every((v, i) => b[i] === v);
      const w = b.readUInt32BE(16);
      const h = b.readUInt32BE(20);
      const [ew, eh] = icon.sizes.split('x').map(Number);
      if (!sig || w !== ew || h !== eh) {
        console.error(`PWA: icon आकार जुळना ${icon.src} = ${w}x${h} (अपेक्षित ${ew}x${eh})`);
        bad = true;
      }
    }
  } else {
    console.error('PWA: manifest icons हाडां गायब');
    bad = true;
  }
}

const swPath = join(root, 'sw.js');
if (!existsSync(swPath) || !readFileSync(swPath, 'utf8').includes("addEventListener('fetch'")) {
  console.error('PWA: sw.js गायब किंवा fetch listener ना');
  bad = true;
}

const robotsPath = join(root, 'robots.txt');
if (!existsSync(robotsPath) || !readFileSync(robotsPath, 'utf8').includes('sitemap-index.xml')) {
  console.error('PWA/SEO: robots.txt गायब किंवा sitemap संदर्भ ना');
  bad = true;
}

// 结构化数据 + 页面结构门禁
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const home = join(root, 'index.html');
if (existsSync(home)) {
  const text = readFileSync(home, 'utf8');
  const blocks = [...text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } });
  if (blocks.length !== 5 || blocks.some((b) => !b)) {
    console.error(`JSON-LD: अपेक्षित 5 valid blocks ना (मेळ्ळे ${blocks.length})`);
    bad = true;
  }
  const types = new Set(blocks.map((b) => b && b['@type']).filter(Boolean));
  for (const want of ['Organization', 'WebSite', 'WebPage', 'TouristAttraction', 'FAQPage']) {
    if (!types.has(want)) {
      console.error(`JSON-LD: ${want} गायब`);
      bad = true;
    }
  }
  const ta = blocks.find((b) => b && b['@type'] === 'TouristAttraction');
  if (ta) {
    if (ta.aggregateRating?.ratingValue !== 4.2 || ta.aggregateRating?.reviewCount !== 27105) {
      console.error('JSON-LD: aggregateRating 4.2/27105 पासून वेगळें');
      bad = true;
    }
    if (ta.telephone !== '+91 832 249 4500') {
      console.error('JSON-LD: telephone drift');
      bad = true;
    }
    if (ta.hasMap !== 'https://maps.app.goo.gl/3z6axsvdHe2spoFg8') {
      console.error('JSON-LD: hasMap drift');
      bad = true;
    }
  }
  const fq = blocks.find((b) => b && b['@type'] === 'FAQPage');
  const visibleDetails = (text.match(/<details/g) || []).length;
  const qLen = fq?.mainEntity?.length || 0;
  if (qLen !== visibleDetails) {
    console.error(`FAQ: schema ${qLen} != visible details ${visibleDetails}`);
    bad = true;
  }
  if ((text.match(/<h1[ >]/g) || []).length !== 1) {
    console.error('H1: होम पानार फकत एकूच h1 आसचो');
    bad = true;
  }
  const imgs = [...text.matchAll(/<img[^>]*>/g)].map((m) => m[0]);
  if (imgs.some((i) => !/alt="[^"]+"/.test(i))) {
    console.error('IMG: alt गायब');
    bad = true;
  }
  const blankNoNoopener = [...text.matchAll(/<a [^>]*target="_blank"[^>]*>/g)]
    .filter((m) => !/rel="[^"]*noopener/.test(m[0]));
  if (blankNoNoopener.length) {
    console.error(`EXT: target=_blank rel noopener ना (${blankNoNoopener.length})`);
    bad = true;
  }
  if (!/<link rel="canonical" href="https:\/\//.test(text)) {
    console.error('canonical absolute गायब');
    bad = true;
  }
  if (!/property="og:image" content="https:\/\//.test(text)) {
    console.error('og:image absolute गायब');
    bad = true;
  }
}

for (const f of htmlFiles) {
  if (/[\p{Script=Han}]/u.test(readFileSync(f, 'utf8'))) {
    console.error(`HTML 汉字残留: ${f}`);
    bad = true;
  }
}

if (bad) process.exit(1);
console.log(`तपासणी यशस्वी: ${files.length} फाइल्स, ${sitemapFiles.length} sitemap फाइल्स (PWA + structured data समाविष्ट).`);
