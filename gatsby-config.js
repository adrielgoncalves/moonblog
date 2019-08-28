module.exports = {
  siteMetadata: {
    title: "Moonshine Blog",
    author: "Adriel Gonçalves",
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-playground`,
  ],
  /* Your site config here */
}
