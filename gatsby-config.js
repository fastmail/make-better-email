/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `makebetteremail`,
    siteUrl: `https://makebetter.email`
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