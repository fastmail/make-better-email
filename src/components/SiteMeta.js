import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// Title plus the OpenGraph/Twitter tags that Slack and Discord use to unfurl
// links.  The image is only 160x160, so we ask for the small "summary" card
// rather than "summary_large_image".  The image lives in /static, not
// src/images, because webpack would inline something this small as a data:
// URI, which no unfurler will fetch. -- claude, 2026-11-08
export default function SiteMeta({ title, pathname }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          description
        }
      }
    }
  `);
  const { siteUrl, description } = site.siteMetadata;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="makebetter.email" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:image" content={`${siteUrl}/mbe.webp`} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="160" />
      <meta property="og:image:height" content="160" />
      <meta name="twitter:card" content="summary" />
    </>
  );
}
