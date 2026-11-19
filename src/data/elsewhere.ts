// Elsewhere page: image-led work shown with captions only (no project pages).
// To add a work: put the original in fama-portfolio-references, add an entry here,
// run `node scripts/elsewhere-images.mjs`, then build.
// `source` is relative to ../fama-portfolio-references and is only read by that script.

export interface Work {
  file: string; // output base name in public/images/elsewhere/
  source: string;
  title: string;
  medium: string;
  year?: string;
  alt: string;
}

export interface WorkSet {
  title: string;
  note: string;
  works: Work[];
}

export const sets: WorkSet[] = [
  {
    title: 'Self-portraits',
    note: 'Photography course, Habib University.',
    works: [
      {
        file: 'avoid-the-gaze',
        source: 'portfolio documents/Self-portraits/FTM06136.jpg',
        title: 'Avoid the gaze',
        medium: 'Photography',
        year: '2019',
        alt: 'Self-portrait with the head wrapped in white gauze, only the eyes visible, cool blue-white light on a black ground.',
      },
      {
        file: 'cant-my-narrative-be-only-mine',
        source: 'portfolio documents/Self-portraits/FTM06110-2.jpg',
        title: 'Can’t my narrative be only mine?',
        medium: 'Photography',
        year: '2019',
        alt: 'Self-portrait on a black ground with the head tipped back under sheer white fabric pulled taut over the face.',
      },
      {
        file: 'birdcage',
        source: 'portfolio documents/Self-portraits/FTM06183.jpg',
        title: 'Untitled (birdcage)',
        medium: 'Photography',
        year: '2019',
        alt: 'Self-portrait with a metal birdcage over the head, both hands holding the cage, in a dark blue patterned shirt.',
      },
      {
        file: 'profile',
        source: 'portfolio documents/Self-portraits/FTM06170.jpg',
        title: 'Untitled (profile)',
        medium: 'Photography',
        year: '2019',
        alt: 'Side profile lit from one edge, the rest of the face and body falling into black.',
      },
    ],
  },
  {
    title: 'Self-directed series',
    note: 'Six frames from a self-directed photography project, Habib University, in two lighting chapters, amber and teal.',
    works: [
      {
        file: 'series-01',
        source: 'photography course bachelors/DSC08368.jpg',
        title: 'Self-directed series, i',
        medium: 'Photography',
        alt: 'Warm amber portrait in a stocking cap, bare shoulders, looking straight at the camera.',
      },
      {
        file: 'series-02',
        source: 'photography course bachelors/DSC08444 (1).jpg',
        title: 'Self-directed series, ii',
        medium: 'Photography',
        alt: 'The same amber portrait with eyes closed and chin slightly raised.',
      },
      {
        file: 'series-03',
        source: 'photography course bachelors/DSC08458.jpg',
        title: 'Self-directed series, iii',
        medium: 'Photography',
        alt: 'Close-up of a face pressed under sheer nude stocking fabric, features softened, in amber light.',
      },
      {
        file: 'series-04',
        source: 'photography course bachelors/DSC08548.jpg',
        title: 'Self-directed series, iv',
        medium: 'Photography',
        alt: 'Head thrown back, throat and shoulder catching light against a dark ground.',
      },
      {
        file: 'series-05',
        source: 'photography course bachelors/DSC08633.jpg',
        title: 'Self-directed series, v',
        medium: 'Photography',
        alt: 'Teal-lit close side profile with freckles and purple lips, looking upward.',
      },
      {
        file: 'series-06',
        source: 'photography course bachelors/DSC08693.jpg',
        title: 'Self-directed series, vi',
        medium: 'Photography',
        alt: 'Tight teal-lit frontal close-up with wide eyes and parted purple lips.',
      },
    ],
  },
  {
    title: 'Illustration',
    note: 'Comic pages from an illustration course during my bachelor’s, Habib University.',
    works: [
      {
        file: 'comic-dachshund',
        source: 'Illustration_course_bachelors/IMG_20200626_143916_387.jpg',
        title: 'I love humans',
        medium: 'Coloured pencil on paper',
        year: '2020',
        alt: 'Comic page: a dachshund walks along a road under trees saying “I love humans… I don’t know why humans don’t love me”, above a street of pink houses with a police car.',
      },
      {
        file: 'comic-japan',
        source: 'Illustration_course_bachelors/IMG_20200618_133545_842.jpg',
        title: 'Japanese food for dummies',
        medium: 'Coloured pencil on paper',
        year: '2020',
        alt: 'Four-panel comic: a phone booking a flight, a plane over a map of Japan, two cooks at their pots, and a book titled Japanese Food for Dummies.',
      },
    ],
  },
];
