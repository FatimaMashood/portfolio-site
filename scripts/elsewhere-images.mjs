// Builds web copies for the Elsewhere page from the originals in ../fama-portfolio-references.
// Usage (local only, Node >= 22.18 for the .ts import): node scripts/elsewhere-images.mjs   (skips outputs that already exist; --force redoes all)
// Output: public/images/elsewhere/<file>-600.webp and -1200.webp, never upscaled.
// Camera metadata (EXIF/GPS) is dropped; only artist and copyright are written.
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { sets } from '../src/data/elsewhere.ts';

const refs = fileURLToPath(new URL('../../fama-portfolio-references/', import.meta.url));
const out = fileURLToPath(new URL('../public/images/elsewhere/', import.meta.url));
const force = process.argv.includes('--force');
mkdirSync(out, { recursive: true });

for (const work of sets.flatMap((set) => set.works.flatMap((w) => w.pages ?? [w]))) {
  for (const width of [600, 1200]) {
    const target = join(out, `${work.file}-${width}.webp`);
    if (!force && existsSync(target)) continue;
    await sharp(join(refs, work.source), { failOn: 'none' })
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .withExif({ IFD0: { Artist: 'Fatima Mashood', Copyright: '© Fatima Mashood. All rights reserved.' } })
      .webp({ quality: 82 })
      .toFile(target);
    console.log('wrote', target);
  }
}
