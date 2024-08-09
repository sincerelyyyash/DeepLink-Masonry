"use client";

import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Item } from '@/data/items';

interface MasonryGridProps {
  items: Item[];
  breakpoints: { [key: number]: number };
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ items, breakpoints }) => {
  const redirectUrl = 'https://x.com/sincerelyyyash';

  const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

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
      layout: 'fill' as const,
      objectFit: 'cover' as const,
    };

    switch (item.type) {
      case 'profile':
        return (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="bg-black text-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-24 h-24 mx-auto mt-4">
                <Image {...commonImageProps} className="rounded-full" />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-300">{item.subtitle}</p>
                <p className="mt-2 text-sm">{item.description}</p>
                <button
                  onClick={handleRedirect}
                  className="mt-4 px-4 py-2 bg-black border text-white rounded-lg hover:bg-white hover:text-black hover:border-black"
                >
                  Visit Profile
                </button>
              </div>
            </motion.div>
          </motion.div>
        );

      case 'image':
        return (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="bg-black rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-64">
                <Image {...commonImageProps} />
              </div>
            </motion.div>
          </motion.div>
        );

      case 'project':
        return (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="bg-black rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-48">
                <Image {...commonImageProps} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          </motion.div>
        );

      case 'experience':
        return (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="bg-black rounded-lg shadow-lg overflow-hidden p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-4">{item.title}</h2>
              {item.details?.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-sm text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-300">{exp.duration}</p>
                  <ul className="list-disc list-inside mt-2 text-gray-300">
                    {exp.achievements?.map((achievement, i) => (
                      <li key={i} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (!items) {
    return <div className="text-red-500">Error: No items provided</div>;
  }

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4"
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

