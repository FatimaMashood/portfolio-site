// Elsewhere page: image-led work shown with captions only (no project pages).
// To add a work: put the original in fama-portfolio-references, add an entry here,
// run `node scripts/elsewhere-images.mjs`, then build.
// `source` is relative to ../fama-portfolio-references and is only read by that script.
// Caption is year + name only, by owner's choice; titles go in later when she gives them.

export interface Work {
  file: string; // output base name in public/images/elsewhere/
  source: string;
  year?: string;
  alt: string;
}

export interface WorkSet {
  title: string;
  note: string;
  works: Work[];
}

const portraits = 'final photography/self-portraits/';
const directed = 'final photography/self-directed/';

export const sets: WorkSet[] = [
  {
    title: 'Self-portraits',
    note: 'Photography, Habib University.',
    works: [
      {
        file: 'self-portrait-01',
        source: `${portraits}FTM06110-2.jpg`,
        year: '2019',
        alt: 'Self-portrait on a black ground with the head tipped back under sheer white fabric pulled taut over the face.',
      },
      {
        file: 'self-portrait-02',
        source: `${portraits}FTM06111.jpg`,
        year: '2019',
        alt: 'A second frame of the veiled self-portrait, head tipped back under white fabric on black.',
      },
      {
        file: 'self-portrait-03',
        source: `${portraits}FTM06136.jpg`,
        year: '2019',
        alt: 'Self-portrait with the head wrapped in white gauze, only the eyes visible, cool light on a black ground.',
      },
      {
        file: 'self-portrait-04',
        source: `${portraits}FTM06170.jpg`,
        year: '2019',
        alt: 'Side profile lit from one edge, the rest of the face and body falling into black.',
      },
    ],
  },
  {
    title: 'Self-directed project',
    note: 'Photography, Habib University.',
    works: [
      {
        file: 'self-directed-01',
        source: `${directed}DSC08456(2).jpg`,
        alt: 'Frontal close-up of eyes and nose under sheer stocking fabric, in amber light.',
      },
      {
        file: 'self-directed-02',
        source: `${directed}DSC08458(1).jpg`,
        alt: 'Angled close-up of a face pressed under sheer stocking fabric, in amber light.',
      },
      {
        file: 'self-directed-03',
        source: `${directed}DSC08472.jpg`,
        alt: 'Face and head wrapped in sheer nude stocking fabric, eyes closed, in warm amber light.',
      },
      {
        file: 'self-directed-04',
        source: `${directed}DSC08590(1).jpg`,
        alt: 'Teal-lit figure seen from behind, head turned in profile over a bare shoulder.',
      },
      {
        file: 'self-directed-05',
        source: `${directed}DSC08633(1).jpg`,
        alt: 'Teal-lit close side profile with freckles and purple lips, looking upward.',
      },
      {
        file: 'self-directed-06',
        source: `${directed}DSC08650(1).jpg`,
        alt: 'Teal-lit portrait turned to the side, looking back over the shoulder, purple lips.',
      },
      {
        file: 'self-directed-07',
        source: `${directed}DSC08661.jpg`,
        alt: 'Teal-lit profile with eyes closed, face tilted upward.',
      },
      {
        file: 'self-directed-08',
        source: `${directed}DSC08691(1).jpg`,
        alt: 'Tight teal-lit frontal close-up with wide eyes and parted purple lips.',
      },
      {
        file: 'self-directed-09',
        source: `${directed}DSC08693(1).jpg`,
        alt: 'A second teal-lit frontal close-up, wide eyes and parted lips.',
      },
    ],
  },
];
