export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ayush Goyal",
    "jobTitle": "Software Engineer",
    "description": "Software Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs. Specializing in Full Stack Development, DevOps, and Cloud Computing.",
    "url": "https://ayushg.live",
    "sameAs": [
      "https://github.com/agayushh",
      "https://linkedin.com/in/ayushh-goyal",
      "https://twitter.com/agayushh"
    ],
    "knowsAbout": [
      "Software Development",
      "Full Stack Development",
      "DevOps",
      "Cloud Computing",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Docker",
      "Kubernetes",
      "AWS",
      "Software Architecture",
      "API Development",
      "UI/UX"
    ],
    "image": {
      "@type": "ImageObject",
      "url": "https://ayushg.live/avatar-light.webp",
      "width": 800,
      "height": 800
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "skills": "Full Stack Development, DevOps, Cloud Computing"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
