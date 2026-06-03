import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const targets = [
  { src: 'drAhmad.jpeg', out: 'drAhmad.webp', width: 800 },
  { src: 'drFouad.jpeg', out: 'drFouad.webp', width: 800 },
  { src: 'drZaid.jpeg', out: 'drZaid.webp', width: 800 },
  { src: 'tooth2.jpg', out: 'tooth2.webp', width: 1400 },
];

for (const { src, out, width } of targets) {
  const input = path.join(publicDir, src);
  const output = path.join(publicDir, out);
  await sharp(input)
    .rotate()
    .resize(width, null, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output);
  const inStat = (await import('fs')).statSync(input);
  const outStat = (await import('fs')).statSync(output);
  console.log(`${src} → ${out}: ${(inStat.size / 1024 / 1024).toFixed(2)}MB → ${(outStat.size / 1024).toFixed(0)}KB`);
}
