module.exports = {
  siteMetadata: {
    title: "Moonshine Blog",
    author: "Adriel Gonçalves",
  },
  plugins: [
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
