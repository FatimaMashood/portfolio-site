// Elsewhere page: image-led work shown with captions only (no project pages).
// To add a work: put the original in fama-portfolio-references, add an entry here,
// run `node scripts/elsewhere-images.mjs`, then build.
// `source` is relative to ../fama-portfolio-references and is only read by that script.
// No per-image captions (owner's choice); each set shows its year once, beside the heading.

export interface Page {
  file: string; // output base name in public/images/elsewhere/
  source: string;
  alt: string;
}

// Every work is a book: one image at a time, click the right/left half to turn.
// The first page is the one visitors see, so put the strongest image first.
// All books share one 4:3 frame so rows line up; images are fitted inside on the page background, never cropped.
export interface Work {
  pages: Page[];
}

export interface WorkSet {
  title: string;
  year: string;
  newRow?: boolean; // start this set at the left of a new row
  works: Work[];
}

const portraits = 'final photography/self-portraits/';
const directed = 'final photography/self-directed/';
const pages = '_prepared/illustration/pages/';
const desiGali = 'desi gali new/';

export const sets: WorkSet[] = [
  {
    title: 'desi gali',
    year: '2021',
    works: [
      {
        pages: [
          {
            file: 'desi-gali-01',
            source: `${desiGali}193261119_1959879867504472_967856048243681487_n.jpg`,
            alt: 'Menu post headed Ghar ka khana from Desi Gali, Sides and add-ons: papad, achar, hari chutney, chapati, naan and laccha paratha with prices in rupees, hand-lettered on a light grey ground.',
          },
          {
            file: 'desi-gali-02',
            source: `${desiGali}193390088_1959879630837829_2813066983618305254_n.jpg`,
            alt: 'Second sides and add-ons menu post: steamed rice, aloo cutlet, kachumbar, palak raita, zeera raita and homemade dahi with prices in rupees.',
          },
          {
            file: 'desi-gali-mains',
            source: `${desiGali}N1.png`,
            alt: 'Menu post headed Ghar ka khana from Desi Gali: chicken and beef khao suey, dum keema, tawa chicken with romali roti and mutton aloo gosht, with prices in rupees, hand-lettered on a light grey ground.',
          },
        ],
      },
    ],
  },
  {
    title: 'illustration',
    year: '2020, 2022',
    works: [
      {
        pages: [
          {
            file: 'comic-a-1',
            source: `${pages}noodle-1.jpg`,
            alt: 'Page 1 of 3, four panels: a boy asleep, a dream of a bowl of noodles, the boy waking up delighted, and the boy as a chef at the stove.',
          },
          {
            file: 'comic-a-2',
            source: `${pages}noodle-2.jpg`,
            alt: 'Page 2 of 3, four panels: a girl worried at a table with a noodle bowl, the girl at a door, the boy lying awake in bed, and a dream of two people holding tickets.',
          },
          {
            file: 'comic-a-3',
            source: 'Illustration_course_bachelors/IMG_20200618_133545_842.jpg',
            alt: 'Page 3 of 3, four panels: a phone booking a flight, a plane over a map of Japan, two cooks at their pots, and a book about Japanese food.',
          },
        ],
      },
      {
        pages: [
          {
            file: 'comic-b-1',
            source: 'Illustration_course_bachelors/IMG_20200626_143916_387.jpg',
            alt: 'Page 1 of 2: a dachshund walks along a road under trees saying it loves humans and does not know why humans do not love it, above a street of pink houses with a police car.',
          },
          {
            file: 'comic-b-2',
            source: `${pages}dog-2.jpg`,
            alt: 'Page 2 of 2: the same road, now with a hand holding a gun and the dachshund wounded, above a row of prison bars with two hands gripping them.',
          },
        ],
      },
      {
        pages: [
          {
            file: 'illustration-vision-board',
            source: 'illustrations new/vision-board-transparent.png',
            alt: 'Single-line drawing in blue pencil: a Dutch church tower with a clock and a waving flag beside a climbing vine, and a woman walking a bicycle with a front basket.',
          },
        ],
      },
    ],
  },
  {
    title: 'self-portraits',
    year: '2019',
    newRow: true,
    works: [
      {
        pages: [
          {
            file: 'self-portrait-01',
            source: `${portraits}FTM06110-2.jpg`,
            alt: 'Self-portrait on a black ground with the head tipped back under sheer white fabric pulled taut over the face.',
          },
          {
            file: 'self-portrait-02',
            source: `${portraits}FTM06111.jpg`,
            alt: 'A second frame of the veiled self-portrait, head tipped back under white fabric on black.',
          },
          {
            file: 'self-portrait-03',
            source: `${portraits}FTM06136.jpg`,
            alt: 'Self-portrait with the head wrapped in white gauze, only the eyes visible, cool light on a black ground.',
          },
          {
            file: 'self-portrait-04',
            source: `${portraits}FTM06170.jpg`,
            alt: 'Side profile lit from one edge, the rest of the face and body falling into black.',
          },
        ],
      },
    ],
  },
  {
    title: 'self-directed project',
    year: '2019',
    works: [
      {
        pages: [
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
            file: 'self-directed-09',
            source: `${directed}DSC08693(1).jpg`,
            alt: 'A second teal-lit frontal close-up, wide eyes and parted lips.',
          },
        ],
      },
    ],
  },
];

// Photos used by the exhibit reviews (src/content/exhibits/*.md); the script builds them like the rest.
const boerhaave = 'exhibitions/Boerhave Museum/Images/';
const mu = 'exhibitions/MU hybrid art house /MU Eindhoven/Attachments/';

export const exhibitImages: Pick<Page, 'file' | 'source'>[] = [
  { file: 'exhibit-boerhaave-theatre', source: `${boerhaave}IMG_8972.jpeg` },
  { file: 'exhibit-boerhaave-jars', source: `${boerhaave}IMG_8947.jpeg` },
  { file: 'exhibit-boerhaave-manikin', source: `${boerhaave}IMG_8964.jpeg` },
  { file: 'exhibit-boerhaave-prints', source: `${boerhaave}IMG_8940.jpeg` },
  { file: 'exhibit-mu-reach', source: `${mu}7D336C3D-23D2-4DED-9BD0-DED701824593.jpeg` },
  { file: 'exhibit-mu-shelf', source: `${mu}8024A27D-F156-4B38-AE95-F28ABE364DFF.jpeg` },
  { file: 'exhibit-mu-artefacts', source: `${mu}D73CB04B-8E61-4DC2-8B7A-3F4AA5AD7A1B.jpeg` },
];
