import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <main>
        <Header />
        <div className="date-time-callout">
          October 30 – November 1, 2024<br />
          <span className="accent">London, England</span>
        </div>
        <hr />
        <p className="info">
          We’re pursuing our mission to make email better by organizing
          makebetter<span className="accent">.email</span>, a meeting of some of
          the most notable email clients and servers. This year, we're hosted
          by <a href="https://www.isode.com/">Isode</a>.{" "}
          <a href="/about" className="about-link">
            Learn more →
          </a>
        </p>
        <div>
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
