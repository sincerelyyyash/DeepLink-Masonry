'use client';
import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { Item } from '@/data/items';

interface MasonryGridProps {
  items: Item[];
  breakpoints: { [key: number]: number };
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ items, breakpoints }) => {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchRedirectUrl = async () => {
      try {
        const res = await fetch('https://uat.api.soshals.app/portfolio/reroute?user=kritarthmittal');
        const data = await res.json();
        setRedirectUrl(data.redirectUrl);
      } catch (error) {
        console.error('Error fetching redirect URL:', error);
      }
    };

    fetchRedirectUrl();
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

  const renderItem = (item: Item) => {
    const commonImageProps = {
      src: item.src || '',
      alt: item.alt || '',
      layout: "fill" as const,
      objectFit: "cover" as const,
    };

    switch (item.type) {
      case 'profile':
        return (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-24 h-24 mx-auto mt-4">
              <Image {...commonImageProps} className="rounded-full" />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-gray-600">{item.subtitle}</p>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
            <div className="p-4 text-center">
              <button
                onClick={handleRedirect}
                className="bg-black text-white py-2 px-4 rounded"
              >
                Watch Now
              </button>
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-64">
              <Image {...commonImageProps} />
            </div>
          </div>
        );

      case 'project':
        return (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48">
              <Image {...commonImageProps} />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
            <h2 className="text-xl font-bold mb-4">{item.title}</h2>
            {item.details?.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-600">{exp.duration}</p>
                <ul className="list-disc list-inside mt-2">
                  {exp.achievements?.map((achievement, i) => (
                    <li key={i} className="text-sm">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            {Object.entries(item).map(([key, value]) => {
              if (typeof value === 'string' && key !== 'type' && key !== 'title' && key !== 'description') {
                return <p key={key} className="text-sm"><strong>{key}:</strong> {value}</p>;
              }
              return null;
            })}
          </div>
        );
    }
  };

  if (!items) {
    return <div>Error: No items provided</div>;
  }

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4 bg-clip-padding"
    >
      {items.map(item => (
        <div key={item.id} className="mb-4">
          {renderItem(item)}
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;

