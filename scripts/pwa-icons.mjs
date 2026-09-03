// PWA 图标生成：以 public/apple-touch-icon.png（180×180 主视觉）为源，
// 生成 manifest 所需 192/512 PNG 与带安全区的 maskable 512 图标。
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('../public/', import.meta.url));
const source = publicDir + 'apple-touch-icon.png';

await sharp(source).resize(192, 192).png().toFile(publicDir + 'icons/icon-192.png');
await sharp(source).resize(512, 512).png().toFile(publicDir + 'icons/icon-512.png');

// maskable：满铺底色 #71361f，中间内容保留安全区（图标缩到 75%）。
const foreground = await sharp(source).resize(384, 384).png().toBuffer();
await sharp({
  create: { width: 512, height: 512, channels: 4, background: { r: 113, g: 54, b: 31, alpha: 1 } }
})
  .composite([{ input: foreground, gravity: 'centre' }])
  .png()
  .toFile(publicDir + 'icons/maskable-512.png');

console.log('PWA icons written to public/icons/.');
