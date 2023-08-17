import * as React from "react";
import { graphql } from "gatsby";

export default function PageTemplate({ data }) {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <>
      <main>
        <h1>
          makebetter<span className="accent">.email</span>
        </h1>
        <div className="info" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="info"><a href="/" className="about-link">← Back</a></div>
      </main>
      <footer>
        <a href="https://www.fastmail.com">
          <img
            src="https://www.fastmail.com/wp-content/uploads/2022/11/FM-White-RGB.png"
            width="300"
            alt="Fastmail"
          />
        </a>
        <br />
        <br />
        <a href="/">Contact us</a>
      </footer>
    </>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
      }
    }
  }
`;
