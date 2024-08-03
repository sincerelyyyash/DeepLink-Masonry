import React from 'react';
import MasonryGrid from '../../components/MasonryGrid';

const MasonryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Masonry Grid</h1>
      <MasonryGrid />
    </div>
  );
};

export default MasonryPage;
