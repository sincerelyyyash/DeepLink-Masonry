'use client';

import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { items, breakpoints, Item } from '../data/items';

const MasonryGrid: React.FC = () => {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://uat.api.soshals.app/portfolio/reroute?user=kritarthmittal');
        const data = await res.json();
        setRedirectUrl(data.redirectUrl);
      } catch (error) {
        console.error('Error fetching redirect URL:', error);
      }
    };

    fetchData();
  }, []);

  const handleRedirect = () => {
    if (redirectUrl) {
      const userAgent = window.navigator.userAgent || window.navigator.vendor;
      const isAndroid = /android/i.test(userAgent);
      const isIOS = /iPad|iPhone|iPod/.test(userAgent);

      if (isAndroid || isIOS) {
        window.location.href = redirectUrl;
      } else {
        window.open(redirectUrl, '_blank');
      }
    }
  };

  const updatedItems: Item[] = items.map(item =>
    item.type === 'link' && item.content ? { ...item, onClick: handleRedirect } : item
  );

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4 bg-clip-padding"
    >
      {updatedItems.map(item => (
        <div key={item.id} className="mb-4 bg-white rounded-lg shadow-md p-4 text-center">
          {item.type === 'image' && item.src && item.alt && (
            <div className="relative w-full h-64">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}
          {item.type === 'text' && item.content && (
            <p className="text-gray-800">{item.content}</p>
          )}
          {item.type === 'link' && item.content && (
            <button onClick={item.onClick} className="text-blue-500 hover:underline">
              {item.content}
            </button>
          )}
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;

