/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `makebetteremail`,
    siteUrl: `https://makebetter.email`,
    description: `makebetter.email is a get-together of people who make significant contributions to the email ecosystem, especially IMAP or JMAP clients and servers.  MBE is hosted by Fastmail, where our mission is to make email better.`
  },
  plugins: ["gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": `${__dirname}/src/pages/`
    },
    __key: "pages"
  }]
};