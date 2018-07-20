module.exports = {
  pathPrefix: '/blog',
  siteMetadata: {
    title: `Nicolas's blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    }
  ],
}
