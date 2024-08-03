export interface Item {
  id: number;
  type: 'image' | 'text' | 'link';
  src?: string;
  alt?: string;
  content?: string;
  href?: string;
  onClick?: () => void;
}

export const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

export const items: Item[] = [
  { id: 1, type: 'image', src: '/assets/bp.jpeg', alt: 'Image 1' },
  { id: 2, type: 'text', content: 'This is a text card' },
  {
    id: 3, type: 'link', content: 'Visit Profile', onClick: () => {
    }
  },
  { id: 4, type: 'image', src: '/assets/bp.jpeg', alt: 'Image 2' },
];
