import type { Metadata } from "next";
import { NEXT_PUBLIC_API_URL } from "@/lib/constants";
import type { BlogPost } from "@/lib/mdx";
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "@/lib/og/dimensions";
import { toIST } from "@/lib/temporal";

const PERSON_SAME_AS = [
  "https://github.com/Pulkitxm",
  "https://www.linkedin.com/in/pulkitxm",
  "https://x.com/_pulkitxm",
  "https://blogs.pulkitxm.com",
  "https://www.npmjs.com/~pulkitxm",
];

const PERSON_KNOWS_ABOUT = [
  "TypeScript",
  "JavaScript",
  "Python",
  "C++",
  "SQL",
  "Node.js",
  "Express.js",
  "Hono",
  "FastAPI",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Shadcn/ui",
  "Redux",
  "Docker",
  "Kubernetes",
  "AWS EKS",
  "AWS EC2",
  "AWS S3",
  "AWS ECR",
  "AWS CodeBuild",
  "AWS WAF",
  "Azure",
  "GCP",
  "GitHub Actions",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Elasticsearch",
  "Git",
  "BullMQ",
  "Prisma",
  "JWT",
  "OAuth 2.0",
  "REST APIs",
  "GraphQL",
  "system design",
  "caching",
  "load balancers",
  "circuit breakers",
  "consistent hashing",
  "bloom filters",
  "database sharding",
  "async processing",
  "high availability",
  "SSG in Next.js",
  "OG images",
  "SSE with FastAPI",
  "RAG chatbots",
  "AI-assisted development",
  "Claude Code",
  "Fable 5",
  "MCP servers",
  "agentic workflows",
  "prompt engineering",
  "vector databases",
  "microservices architecture",
  "serverless computing",
  "event-driven architecture",
  "CI/CD pipelines",
  "infrastructure as code",
  "test-driven development",
  "clean code",
  "scalable backend systems",
  "distributed systems",
  "AI safety & alignment",
  "LLM orchestration",
  "production AI agents",
];

const BASE_KEYWORDS = [
  "Pulkit",
  "software engineer",
  "senior software engineer",
  "full-stack developer",
  "backend engineer",
  "AI engineer",
  "AI agents builder",
  "Claude Code",
  "agentic development",
  "open source",
  "web development",
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Hono",
  "FastAPI",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Elasticsearch",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "GCP",
  "GitHub Actions",
  "BullMQ",
  "Prisma",
  "REST APIs",
  "GraphQL",
  "OAuth 2.0",
  "JWT",
  "system design",
  "caching",
  "load balancers",
  "circuit breakers",
  "consistent hashing",
  "bloom filters",
  "database sharding",
  "high availability",
  "async processing",
  "microservices",
  "serverless",
  "cloud architecture",
  "software architecture",
  "tech lead",
  "scalable architecture",
  "MagicAPI",
  "CrowdVolt",
  "DatawaveLabs",
  "portfolio",
  "hire software engineer",
  "software engineer portfolio",
];

const COMPONENT_KEYWORDS = [
  "shadcn registry",
  "shadcn ui",
  "React component",
  "Next.js component",
  "open source component",
  "free UI component",
  "copy paste component",
  "Tailwind CSS",
  "component library",
  "modern UI design",
  "accessible React components",
  "high performance UI",
];

export const SITE = {
  logo: `${NEXT_PUBLIC_API_URL}/icon.png`,
  name: "Pulkit",
  personId: `${NEXT_PUBLIC_API_URL}/#person`,
  personImage: `${NEXT_PUBLIC_API_URL}/me.png`,
  sameAs: PERSON_SAME_AS,
  titleDefault: "Pulkit | Software Engineer & AI Agent Builder",
  titleTemplate: "%s | Pulkit",
  twitter: "@_pulkitxm",
  url: NEXT_PUBLIC_API_URL,
  websiteId: `${NEXT_PUBLIC_API_URL}/#website`,
} as const;

export type SeoPageType =
  | "home"
  | "blogPost"
  | "blogList"
  | "componentDetail"
  | "componentList"
  | "claudeProject"
  | "claudeDirectoryList"
  | "seriesList"
  | "seriesDetail"
  | "services"
  | "simple";

interface PageTypeConfig {
  absoluteTitle?: boolean;
  category?: string;
  extraKeywords?: readonly string[];
  ogType: "article" | "website";
}

export const PAGE_TYPES: Record<SeoPageType, PageTypeConfig> = {
  blogList: { category: "technology", ogType: "website" },
  blogPost: { category: "technology", ogType: "article" },
  claudeDirectoryList: { category: "UI experiments", ogType: "website" },
  claudeProject: { category: "UI experiments", ogType: "website" },
  componentDetail: { category: "UI components", extraKeywords: COMPONENT_KEYWORDS, ogType: "website" },
  componentList: { category: "UI components", extraKeywords: COMPONENT_KEYWORDS, ogType: "website" },
  home: { absoluteTitle: true, category: "technology", ogType: "website" },
  seriesDetail: { category: "technology", ogType: "website" },
  seriesList: { category: "technology", ogType: "website" },
  services: { category: "technology", ogType: "website" },
  simple: { category: "technology", ogType: "website" },
};

export interface SeoBreadcrumb {
  name: string;
  url: string;
}

export interface SeoComponent {
  dateModified?: string;
  dependencies?: readonly string[];
  description: string;
  keywords: readonly string[];
  slug: string;
  title: string;
}

export interface SeoService {
  description: string;
  name: string;
  serviceType?: string;
}

export interface SeoFaqItem {
  a: string;
  q: string;
}

export interface SeoVideo {
  contentUrl: string;
  description: string;
  embedUrl?: string;
  name: string;
  thumbnailUrl: string;
  uploadDate: string;
}

export interface SeoCollectionItem {
  codeRepository?: string;
  datePublished?: string;
  description?: string;
  keywords?: string;
  name: string;
  type: "BlogPosting" | "SoftwareSourceCode";
  url: string;
  video?: SeoVideo;
}

type JsonLdNode = Record<string, unknown>;

export interface SeoGraph {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
}

export interface SeoInput {
  blog?: BlogPost;
  breadcrumb?: readonly SeoBreadcrumb[];
  collectionDescription?: string;
  collectionItems?: readonly SeoCollectionItem[];
  collectionName?: string;
  component?: SeoComponent;
  description: string;
  extraNodes?: readonly JsonLdNode[];
  faq?: readonly SeoFaqItem[];
  image: string;
  keywords?: readonly string[];
  path: string;
  services?: readonly SeoService[];
  title: string;
  type?: SeoPageType;
}

export interface PageSeo {
  graph: SeoGraph;
  metadata: Metadata;
}

const authorRef = { "@id": SITE.personId } as const;
const websiteRef = { "@id": SITE.websiteId } as const;

function urlFor(path: string): string {
  return path ? `${SITE.url}/${path}` : SITE.url;
}

function normalizeDate(date: string): string {
  const withTime = date.includes("T") ? date : `${date}T00:00:00+00:00`;
  return toIST(withTime).toISOString();
}

function personNode(): JsonLdNode {
  return {
    "@id": SITE.personId,
    "@type": "Person",
    alumniOf: {
      "@type": "EducationalOrganization",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
      },
      name: "Dronacharya College of Engineering",
    },
    award: [
      "ICPC Amritapuri 2023 Regionalist",
      "Gurugram University Ideathon Winner - First Place",
    ],
    description:
      "Software Engineer specializing in TypeScript, React, Next.js, Node.js, Python, and cloud infrastructure (AWS/GCP/Azure). Deep hands-on expertise architecting production-grade AI agents, LLM orchestration, and modern web applications. Proven track record at MagicAPI, CrowdVolt (YC W24), and DatawaveLabs.",
    gender: "Male",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Bachelor of Technology",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "Dronacharya College of Engineering",
        },
      },
    ],
    hasOccupation: {
      "@type": "Occupation",
      educationRequirements: "Bachelor's Degree in Computer Science or related field",
      experienceRequirements: "Demonstrated experience in full-stack web development, cloud architecture, and AI engineering",
      name: "Software Engineer",
      occupationalCategory: "15-1252.00 - Software Developers",
      skills: "TypeScript, React, Next.js, Node.js, Python, AWS, System Design, AI Agents",
    },
    image: SITE.personImage,
    jobTitle: "Software Engineer & AI Agent Builder",
    knowsAbout: PERSON_KNOWS_ABOUT,
    knowsLanguage: [
      {
        "@type": "Language",
        alternateName: "en",
        name: "English",
      },
      {
        "@type": "Language",
        alternateName: "hi",
        name: "Hindi",
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Deviators Coding Club",
      roleName: "Chairperson",
    },
    name: "Pulkit",
    nationality: {
      "@type": "Country",
      name: "India",
    },
    sameAs: SITE.sameAs,
    seeks: [
      {
        "@type": "Demand",
        description: "Seeking challenging software engineering, senior frontend, backend, or AI engineer roles at innovative tech companies.",
        itemOffered: {
          "@type": "Service",
          description: "Full-stack web development, scalable cloud architecture, system design, and AI agent integration.",
          name: "Software Engineering & AI Development Services",
        },
      },
    ],
    url: SITE.url,
    workLocation: {
      "@type": "Place",
      description: "Remote / Worldwide / India",
      name: "Remote",
    },
    worksFor: {
      "@type": "Organization",
      name: "MagicAPI",
      url: "https://www.magicapi.com",
    },
  };
}

function websiteNode(): JsonLdNode {
  return {
    "@id": SITE.websiteId,
    "@type": "WebSite",
    alternateName: ["pulkitxm", "Pulkit Portfolio", "Pulkit Software Engineer"],
    description:
      "Official portfolio and technical blog of Pulkit, a Software Engineer specializing in TypeScript, Next.js, Node.js, cloud systems, and AI agent workflows. Explore cutting-edge projects, UI components, and expert articles on system design and LLMs.",
    inLanguage: "en-US",
    keywords: BASE_KEYWORDS.join(", "),
    name: "Pulkit - Software Engineer & AI Agent Builder",
    potentialAction: {
      "@type": "SearchAction",
      "query-input": "required name=search_term_string",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/blogs?search={search_term_string}`,
      },
    },
    publisher: authorRef,
    url: SITE.url,
  };
}

function breadcrumbNode(items: readonly SeoBreadcrumb[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      item: item.url,
      name: item.name,
      position: index + 1,
    })),
  };
}

function resolveBreadcrumb(input: SeoInput): SeoBreadcrumb[] {
  if (input.breadcrumb) {
    return [...input.breadcrumb];
  }
  const url = urlFor(input.path);
  const trail: SeoBreadcrumb[] = [{ name: "Home", url: SITE.url }];
  if (input.type === "home") {
    return trail;
  }
  if (input.type === "blogPost" && input.blog?.frontmatter.series) {
    const series = input.blog.frontmatter.series;
    const seriesName = series
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    trail.push({ name: "Series", url: `${SITE.url}/series` });
    trail.push({ name: seriesName, url: `${SITE.url}/series/${series}` });
  } else if (input.type === "blogPost") {
    trail.push({ name: "Blogs", url: `${SITE.url}/blogs` });
  } else if (input.type === "componentDetail") {
    trail.push({ name: "Components", url: `${SITE.url}/components` });
  } else if (input.type === "claudeProject") {
    trail.push({ name: "Claude Directory", url: `${SITE.url}/claude-directory` });
  } else if (input.type === "seriesDetail") {
    trail.push({ name: "Series", url: `${SITE.url}/series` });
  }
  trail.push({ name: input.title, url });
  return trail;
}

function blogPostingNode(input: SeoInput): JsonLdNode {
  const blog = input.blog as BlogPost;
  const url = urlFor(input.path);
  const date = normalizeDate(blog.frontmatter.date);
  return {
    "@id": `${url}#article`,
    "@type": "BlogPosting",
    articleSection: blog.frontmatter.tags[0] || "Technology",
    author: authorRef,
    dateModified: date,
    datePublished: date,
    description: blog.frontmatter.description,
    headline: blog.frontmatter.title,
    image: {
      "@type": "ImageObject",
      height: OG_IMAGE_HEIGHT,
      url: input.image,
      width: OG_IMAGE_WIDTH,
    },
    inLanguage: "en-US",
    isPartOf: websiteRef,
    keywords: blog.frontmatter.tags.join(", "),
    mainEntityOfPage: { "@id": url },
    publisher: authorRef,
    timeRequired: `PT${blog.frontmatter.readTime}M`,
    url,
    wordCount: blog.content.trim().split(/\s+/).length,
  };
}

function componentNode(input: SeoInput): JsonLdNode {
  const component = input.component as SeoComponent;
  const url = urlFor(input.path);
  const node: JsonLdNode = {
    "@id": `${url}#software`,
    "@type": "SoftwareSourceCode",
    applicationCategory: "UI Component",
    author: authorRef,
    codeRepository: "https://github.com/Pulkitxm/pulkitxm.com",
    description: component.description,
    image: input.image,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    keywords: component.keywords.join(", "),
    license: "https://opensource.org/licenses/MIT",
    name: component.title,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
    },
    operatingSystem: "Cross-platform",
    programmingLanguage: { "@type": "ComputerLanguage", name: "TypeScript" },
    url,
  };
  if (component.dateModified) {
    node.dateModified = component.dateModified;
  }
  if (component.dependencies && component.dependencies.length > 0) {
    node.softwareRequirements = component.dependencies.join(", ");
  }
  return node;
}

function collectionPageNode(input: SeoInput): JsonLdNode {
  const url = urlFor(input.path);
  const items = input.collectionItems ?? [];
  return {
    "@id": url,
    "@type": "CollectionPage",
    description: input.collectionDescription ?? input.description,
    inLanguage: "en-US",
    isPartOf: websiteRef,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => {
        const inner: JsonLdNode = { "@type": item.type, name: item.name, url: item.url };
        if (item.description) {
          inner.description = item.description;
        }
        if (item.type === "BlogPosting") {
          inner.author = authorRef;
          if (item.datePublished) {
            inner.datePublished = item.datePublished;
          }
        }
        if (item.type === "SoftwareSourceCode") {
          inner.programmingLanguage = "TypeScript";
          if (item.codeRepository) {
            inner.codeRepository = item.codeRepository;
          }
          if (item.keywords) {
            inner.keywords = item.keywords;
          }
          if (item.video) {
            inner.video = {
              "@type": "VideoObject",
              contentUrl: item.video.contentUrl,
              description: item.video.description,
              name: item.video.name,
              thumbnailUrl: item.video.thumbnailUrl,
              uploadDate: item.video.uploadDate,
            };
          }
        }
        return { "@type": "ListItem", item: inner, position: index + 1 };
      }),
      numberOfItems: items.length,
    },
    name: input.collectionName ?? input.title,
    url,
  };
}

function serviceNodes(input: SeoInput): JsonLdNode[] {
  const url = urlFor(input.path);
  const services = input.services ?? [];
  const nodes: JsonLdNode[] = [
    {
      "@type": "Service",
      areaServed: "Worldwide",
      availableChannel: { "@type": "ServiceChannel", serviceUrl: url },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            description: service.description,
            name: service.name,
            serviceType: service.serviceType || "Web Development",
          },
          position: index + 1,
        })),
        name: "Web Development Services",
      },
      provider: authorRef,
      serviceType: "Professional Services",
      url,
    },
  ];
  if (input.faq && input.faq.length > 0) {
    nodes.push(faqNode(input.faq, url));
  }
  return nodes;
}

function faqNode(faq: readonly SeoFaqItem[], url: string): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      acceptedAnswer: { "@type": "Answer", text: item.a, url },
      name: item.q,
    })),
  };
}

export function globalGraph(): SeoGraph {
  return { "@context": "https://schema.org", "@graph": [websiteNode(), personNode()] };
}

function buildGraph(input: SeoInput): SeoGraph {
  const nodes: JsonLdNode[] = [];
  const url = urlFor(input.path);

  switch (input.type ?? "simple") {
    case "home":
      nodes.push({
        "@id": `${url}#webpage`,
        "@type": ["WebPage", "ProfilePage"],
        about: authorRef,
        author: authorRef,
        description: input.description,
        inLanguage: "en-US",
        isPartOf: websiteRef,
        mainEntity: authorRef,
        name: input.title,
        url,
      });
      nodes.push(breadcrumbNode(resolveBreadcrumb(input)));
      break;
    case "blogPost":
      if (input.blog) {
        nodes.push(blogPostingNode(input));
        nodes.push(breadcrumbNode(resolveBreadcrumb(input)));
      }
      break;
    case "componentDetail":
      if (input.component) {
        nodes.push(componentNode(input));
        nodes.push(breadcrumbNode(resolveBreadcrumb(input)));
      }
      break;
    case "claudeProject":
      nodes.push({
        "@id": `${url}#webpage`,
        "@type": "WebPage",
        author: authorRef,
        description: input.description,
        inLanguage: "en-US",
        isPartOf: websiteRef,
        name: input.title,
        url,
      });
      nodes.push(breadcrumbNode(resolveBreadcrumb(input)));
      break;
    case "blogList":
    case "componentList":
    case "claudeDirectoryList":
    case "seriesDetail":
      nodes.push(collectionPageNode(input));
      nodes.push(breadcrumbNode(resolveBreadcrumb(input)));
      break;
    case "services":
      nodes.push(...serviceNodes(input));
      nodes.push(breadcrumbNode(resolveBreadcrumb(input)));
      break;
    case "seriesList":
    case "simple":
      nodes.push({
        "@id": `${url}#webpage`,
        "@type": "WebPage",
        author: authorRef,
        description: input.description,
        inLanguage: "en-US",
        isPartOf: websiteRef,
        name: input.title,
        url,
      });
      nodes.push(breadcrumbNode(resolveBreadcrumb(input)));
      break;
    default:
      nodes.push({
        "@id": `${url}#webpage`,
        "@type": "WebPage",
        author: authorRef,
        description: input.description,
        inLanguage: "en-US",
        isPartOf: websiteRef,
        name: input.title,
        url,
      });
      nodes.push(breadcrumbNode(resolveBreadcrumb(input)));
      break;
  }

  if (input.extraNodes) {
    nodes.push(...input.extraNodes);
  }

  return { "@context": "https://schema.org", "@graph": nodes };
}

function buildMetadata(input: SeoInput): Metadata {
  const config = PAGE_TYPES[input.type ?? "simple"];
  const url = urlFor(input.path);
  const isArticle = config.ogType === "article" && !!input.blog;

  const keywords = [...BASE_KEYWORDS, ...(config.extraKeywords ?? []), ...(input.keywords ?? [])];

  const imageAlt = input.component
    ? `${input.title} - React component for shadcn/ui and Next.js`
    : `${input.title} - Pulkit's Software Engineering Portfolio`;

  const openGraph: Metadata["openGraph"] = isArticle
    ? {
        authors: ["Pulkit"],
        description: input.description,
        images: [
          {
            alt: input.blog?.frontmatter.description || input.title,
            height: OG_IMAGE_HEIGHT,
            secureUrl: input.image,
            type: "image/png",
            url: input.image,
            width: OG_IMAGE_WIDTH,
          },
        ],
        locale: "en_US",
        modifiedTime: input.blog?.frontmatter.date,
        publishedTime: input.blog?.frontmatter.date,
        siteName: "Pulkit - Software Engineer & AI Agent Builder",
        tags: input.blog?.frontmatter.tags,
        title: input.title,
        type: "article",
        url,
      }
    : input.type === "home"
    ? {
        description: input.description,
        firstName: "Pulkit",
        gender: "male",
        images: [
          {
            alt: imageAlt,
            height: OG_IMAGE_HEIGHT,
            secureUrl: input.image,
            type: "image/png",
            url: input.image,
            width: OG_IMAGE_WIDTH,
          },
        ],
        locale: "en_US",
        siteName: "Pulkit - Software Engineer & AI Agent Builder",
        title: input.title,
        type: "profile",
        url,
        username: "pulkitxm",
      }
    : {
        description: input.description,
        images: [
          {
            alt: imageAlt,
            height: OG_IMAGE_HEIGHT,
            secureUrl: input.image,
            type: "image/png",
            url: input.image,
            width: OG_IMAGE_WIDTH,
          },
        ],
        locale: "en_US",
        siteName: "Pulkit - Software Engineer & AI Agent Builder",
        title: input.title,
        type: "website",
        url,
      };

  const seriesName = input.blog?.frontmatter.series
    ? input.blog.frontmatter.series
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : null;

  const blogOther =
    isArticle && input.blog
      ? {
          "article:author": SITE.url,
          "article:modified_time": normalizeDate(input.blog.frontmatter.date),
          "article:published_time": normalizeDate(input.blog.frontmatter.date),
          "article:section": input.blog.frontmatter.tags[0] || "Technology",
          ...(seriesName ? { "article:series": seriesName } : {}),
          "article:tag": input.blog.frontmatter.tags.join(", "),
          reading_time: `${input.blog.frontmatter.readTime} min read`,
          "twitter:data1": `${input.blog.frontmatter.readTime} min read`,
          "twitter:data2": seriesName || input.blog.frontmatter.tags[0] || "Technology",
          "twitter:label1": "Reading time",
          "twitter:label2": seriesName ? "Series" : "Category",
          word_count: String(input.blog.content.trim().split(/\s+/).length),
        }
      : {};

  const title: Metadata["title"] = config.absoluteTitle
    ? { default: SITE.titleDefault, template: SITE.titleTemplate }
    : input.title;

  const metadata: Metadata = {
    alternates: { canonical: url },
    authors: [{ name: "Pulkit", url: SITE.url }],
    category: input.blog?.frontmatter.tags[0] || config.category,
    classification: "Software Engineering, AI Engineering, Full-Stack Web Development",
    creator: "Pulkit",
    description: input.description,
    keywords,
    metadataBase: new URL(NEXT_PUBLIC_API_URL),
    openGraph,
    other: {
      ...blogOther,
      "dmca-site-verification": "OEQ0aUVFTHhXY1ludHB6VEovd29WZz090",
      "format-detection": "telephone=no",
      "og:logo": SITE.logo,
      "profile:username": "pulkitxm",
      "twitter:domain": "pulkitxm.com",
      "twitter:url": url,
    },
    publisher: "Pulkit",
    robots: {
      follow: true,
      googleBot: {
        follow: true,
        index: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        noimageindex: false,
      },
      index: true,
      nocache: false,
    },
    title,
    twitter: {
      card: "summary_large_image",
      creator: SITE.twitter,
      description: input.description,
      images: [{ alt: imageAlt, url: input.image }],
      site: SITE.twitter,
      title: input.title,
    },
  };

  return metadata;
}

export function buildPageSeo(input: SeoInput): PageSeo {
  return { graph: buildGraph(input), metadata: buildMetadata(input) };
}

export function buildMetadataFor(input: SeoInput): Metadata {
  return buildMetadata(input);
}
