import React from 'react';
import { PhotoT } from '../lib/photos';
// import Image from 'next/image';

export default function Photo({
  photo,
  showGallery,
  title,
}: {
  photo: PhotoT;
  showGallery: (number) => void;
  title?: string;
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
        {/*<Image id={photo.id} src={photo.src} alt={photo.title} width={176} height={132} />*/}
        <>
          <source type="image/webp" srcSet={photo.smallWebp} />
          <source type="image/jpeg" srcSet={photo.msrc} />
          <img id={photo.id} src={photo.msrc} alt={photo.title} />
        </>
      </picture>
    </div>
  );
}
