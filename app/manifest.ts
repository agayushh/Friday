import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ayush Goyal - Software Engineer Portfolio',
    short_name: 'Ayush Goyal',
    description: 'Software Engineer passionate about creating high-performance, user-centric software solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/image.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
