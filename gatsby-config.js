const  dotenv = require ('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
  // console.log(process.env.CONTENTFUL_ACCESS_TOKEN)
}
module.exports = {
  siteMetadata: {
    title: "Moonshine Blog",
    author: "Adriel Gonçalves",
  },

  plugins: [ 
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },

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
        plugins: [
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 750,
                    linkImagesToOriginal: false,
                  },
                },
              ],
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `pq4j7it9shqo`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-playground`,
  ],
  /* Your site config here */
}
