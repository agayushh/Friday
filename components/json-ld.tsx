import React from "react";
import { buildPageSeo, globalGraph, type SeoGraph, type SeoInput } from "@/lib/seo";

export interface JsonLdProps {
  data: SeoGraph | Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

/**
 * Renders a standard JSON-LD script tag for search engine structured data.
 */
export const JsonLd: React.FC<JsonLdProps> = ({ data, id = "json-ld" }) => {
  return (
    <script
      key={id}
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

/**
 * Renders the global WebSite and Person schemas for the portfolio.
 * Place this in the root layout or document head.
 */
export const GlobalJsonLd: React.FC = () => {
  return <JsonLd id="global-json-ld" data={globalGraph()} />;
};

export interface PageJsonLdProps {
  input: SeoInput;
}

/**
 * Renders page-specific Schema.org structured data (e.g., BlogPosting, WebPage, ProfilePage, SoftwareSourceCode).
 */
export const PageJsonLd: React.FC<PageJsonLdProps> = ({ input }) => {
  const { graph } = buildPageSeo(input);
  return <JsonLd id={`page-json-ld-${input.path || "root"}`} data={graph} />;
};
