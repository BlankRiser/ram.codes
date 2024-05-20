import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ram.codes',
    short_name: 'ram.codes',
    description: 'Portfolio of Ram Shankar',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicons/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
