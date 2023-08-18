import * as React from "react";

const centerButtonStyles = {
  marginTop: "calc(3rem + 26px)",
  marginBottom: 26,
};

const IndexPage = () => {
  return (
    <>
      <main>
        <h1>
          makebetter<span className="accent">.email</span>
        </h1>
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
        <a href="mailto:ehlo@makebetter.email">Contact us</a>
      </footer>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
