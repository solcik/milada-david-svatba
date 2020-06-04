import React from 'react';
import { PhotoT } from '../lib/photos';

export default function Photo({
  photo,
  showGallery,
  title,
  lazy,
}: {
  photo: PhotoT;
  showGallery: (number) => void;
  title?: string;
  lazy?: boolean;
}): JSX.Element {
  return (
    <div
      className="rounded-full overflow-hidden cursor-pointer"
      style={{ maxWidth: '16rem' }}
      key={photo.id}
      onClick={() => showGallery(photo.index)}
      title={title}
    >
      <picture className="w-full h-full object-contain">
        {lazy === true ? (
          <>
            <source type="image/webp" data-srcset={photo.smallWebp} />
            <source type="image/jpeg" data-srcset={photo.msrc} />
            <img id={photo.id} data-src={photo.msrc} alt={photo.title} className="lazyload" />
          </>
        ) : (
          <>
            <source type="image/webp" srcSet={photo.smallWebp} />
            <source type="image/jpeg" srcSet={photo.msrc} />
            <img id={photo.id} src={photo.msrc} alt={photo.title} />
          </>
        )}
      </picture>
    </div>
  );
}
