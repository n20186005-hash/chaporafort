// चापोरा किल्ला – स्थानिक छायाचित्रांचें संपीडन (compress) स्क्रिप्ट.
// sharp वापरून: EXIF फिरकावणूक सारकीं करप, सगळ्यांत व्हड बाजू 1600px मेरेन मर्यादित दवरप,
// mozjpeg progressive q82.  नवी फाइल '.opt-' प्रत्ययान सकयल बरोवन मागीर मूळ नांवाचेर
// rename करता (मोठे JPEG बरयतना येणारे चुकींक (errno -4094 सारकें) लागीं जावंचे ना).
import { statSync, renameSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const dir = fileURLToPath(new URL('../public/images/', import.meta.url));
const files = (await readdir(dir)).filter((f) => /\.jpe?g$/i.test(f)).sort();

if (files.length === 0) {
  console.log('संपीडन खातीर कसलीच JPEG फाइल मेळ्ळी ना.');
  process.exit(0);
}

const MAX = 1600;
let totalBefore = 0;
let totalAfter = 0;

for (const f of files) {
  const src = join(dir, f); // dir keeps trailing slash
  const target = src.replace(/\.(jpe?g)$/i, '.jpg');
  const tmp = target.replace(/\.jpg$/i, '.opt.jpg');
  const before = statSync(src).size;
  totalBefore += before;

  let meta;
  try {
    meta = await sharp(src).metadata();
  } catch (err) {
    console.warn(`स्किप (वाचूंक शकना): ${f} – ${err instanceof Error ? err.message : err}`);
    continue;
  }
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;

  try {
    const builder = sharp(src, { failOn: 'none' }).rotate().resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true });
    await builder.jpeg({ quality: 82, mozjpeg: true, progressive: true, chromaSubsampling: '4:2:0' }).toFile(tmp);
    renameSync(tmp, target);
    const after = statSync(target).size;
    totalAfter += after;
    const pct = before > 0 ? ((1 - after / before) * 100).toFixed(1) : '0.0';
    console.log(`${f}  ${w}x${h}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB  (-${pct}%)`);
  } catch (err) {
    console.error(`अपयश: ${f} – ${err instanceof Error ? err.message : err}`);
  }
}

console.log('\nएकूण: ' + (totalBefore / 1048576).toFixed(2) + 'MB -> ' + (totalAfter / 1048576).toFixed(2) + 'MB  (' + (totalBefore > 0 ? `-${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%` : '0%') + ')');
