export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ayush Goyal",
    "jobTitle": "Software Engineer",
    "description": "Software Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.",
    "url": "https://ayushgoyal.dev",
    "sameAs": [
      "https://github.com/agayushh",
      "https://linkedin.com/in/ayushgoyal",
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
      "AWS"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Your University Name"
    },
    "image": "https://ayushgoyal.dev/Pasted image.png"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
