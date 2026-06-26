import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      }
    ],
    sitemap: 'https://ayushg.live/sitemap.xml',
  }
}
