import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const centerButtonStyles = {
  marginTop: "calc(3rem + 26px)",
  marginBottom: 26,
};

const IndexPage = () => {
  return (
    <>
      <main>
        <Header />
        <div className="date-time-callout">
          October 30 – November 2<br />
          <span className="accent">Philadelphia, Pennsylvania</span>
        </div>
        <hr />
        <p className="info">
          This year, we’re pursuing our mission to make email better by hosting
          makebetter<span className="accent">.email</span>, a meeting of some of
          the most notable email clients and servers.{" "}
          <a href="/about" className="about-link">
            Learn more →
          </a>
        </p>
        <div style={centerButtonStyles}>
          <a className="button" href="/attend">
            Information for attendees
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>makebetter.email</title>;
