// Profile photos shown on /bwg_gallery/scott-cate-profile-photos/ and the
// /family/scott-cate-profile-photos/ post. Each photo is listed once with every
// size we host, largest first; the first size is the one displayed. Dimensions
// and byte counts describe the files in public/ — update them if a file changes.
export interface PhotoSize {
  src: string;
  width: number;
  height: number;
  bytes: number;
}

export interface ProfilePhoto {
  title: string;
  alt: string;
  aiGenerated: boolean;
  sizes: [PhotoSize, ...PhotoSize[]];
}

export const profilePhotos: ProfilePhoto[] = [
  {
    title: 'High-Rise Office',
    alt: 'Scott Cate in a high rise office',
    aiGenerated: true,
    sizes: [{ src: '/wp-content/uploads/2025/04/scott-cate-profile-headhot.png', width: 1024, height: 768, bytes: 926893 }],
  },
  {
    title: 'On the Street',
    alt: 'Scott Cate in a jacket on the street',
    aiGenerated: true,
    sizes: [{ src: '/wp-content/uploads/2025/04/scott-cate-street.png', width: 1024, height: 768, bytes: 938723 }],
  },
  {
    title: 'On Stage',
    alt: 'Scott Cate on stage',
    aiGenerated: false,
    sizes: [{ src: '/wp-content/uploads/2025/02/scott-on-stage.jpeg', width: 427, height: 427, bytes: 31386 }],
  },
  {
    title: 'Lima, Peru',
    alt: 'Scott Cate with a hat on overlooking the ocean in Lima, Peru',
    aiGenerated: false,
    sizes: [
      { src: '/wp-content/uploads/2025/03/scott-cate-ocean.jpg', width: 1890, height: 1890, bytes: 1253901 },
      { src: '/wp-content/uploads/2025/03/scott-cate-ocean-e1741369777327.jpg', width: 500, height: 500, bytes: 42670 },
    ],
  },
];
