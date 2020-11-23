import { PhotoSwipe } from 'react-photoswipe';
import React from 'react';
import { PhotoT } from '../lib/photos';

export default function Gallery({
  isOpen,
  items,
  options,
  onClose,
}: {
  isOpen: boolean;
  items: PhotoT[];
  options: Record<string, unknown>;
  onClose: () => void;
}): JSX.Element {
  return (
    <PhotoSwipe
      isOpen={isOpen}
      items={items}
      // http://photoswipe.com/documentation/options.html
      options={options}
      onClose={onClose}
    />
  );
}
