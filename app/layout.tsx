import type { Metadata } from "next";
import { Geist, Geist_Mono, Jura, Maven_Pro } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const maven = Maven_Pro({
  variable: "--font-maven",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Goyal - Software Engineer Portfolio",
  description:
    "Software Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.",
  keywords: [
    "Ayush Goyal",
    "Software Engineer",
    "DevOps Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Portfolio",
    "Web Development",
    "UI/UX",
    "Cloud Computing",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "AWS",
    "Software Architecture",
    "API Development",
    "Responsive Design",
  ],
  authors: [{ name: "Ayush Goyal" }],
  openGraph: {
    title: "Ayush Goyal - Software Engineer Portfolio",
    description:
      "Software Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Goyal - Software Engineer Portfolio",
    description:
      "Software Engineer with a passion for creating high-performance, user-centric software solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of light mode - runs before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                // Default to dark mode if localStorage is not available
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}
       ${jura.variable} ${maven.variable} antialiased h-screen w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
