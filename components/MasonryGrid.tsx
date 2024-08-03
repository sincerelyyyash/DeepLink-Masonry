import React from 'react';
import Masonry from 'react-masonry-css';

interface Item {
  id: number;
  type: 'image' | 'text' | 'link';
  src?: string;
  alt?: string;
  content?: string;
  href?: string;
}

const items: Item[] = [
  { id: 1, type: 'image', src: '/images/img1.jpg', alt: 'Image 1' },
  { id: 2, type: 'text', content: 'This is a text card' },
  { id: 3, type: 'link', href: 'https://example.com', content: 'Visit Example' },
  { id: 4, type: 'image', src: '/images/img2.jpg', alt: 'Image 2' },
];

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

const MasonryGrid: React.FC = () => {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4 bg-clip-padding"
    >
      {items.map(item => (
        <div key={item.id} className="mb-4 bg-white rounded-lg shadow-md p-4 text-center">
          {item.type === 'image' && item.src && item.alt && (
            <img src={item.src} alt={item.alt} className="w-full rounded-lg" />
          )}
          {item.type === 'text' && item.content && (
            <p className="text-gray-800">{item.content}</p>
          )}
          {item.type === 'link' && item.href && item.content && (
            <a href={item.href} className="text-blue-500 hover:underline">
              {item.content}
            </a>
          )}
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;
