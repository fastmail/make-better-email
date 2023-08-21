import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PageTemplate({ data }) {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <>
      <main>
        <Header />
        <div className="info" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="info">
          <a href="/" className="about-link">
            ← Back
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const Head = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return <title>makebetter.email — {frontmatter.title}</title>;
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;
