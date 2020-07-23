module.exports = {
  siteMetadata: {
    title: "Hello Yuusuke || Home",
    description: "This is Yuusuke's Portfolio Website!",
    siteUrl: "https://www.hello-yuusuke.work",
    author: "Yuusuke Okamoto",
    twitter: "yuusukesan_EN",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yuusuke Okamoto`,
        short_name: `yuusuke`,
        start_url: `/`,
        background_color: `#337ab7`,
        theme_color: `#337ab7`,
        display: `fullscreen`,
        icon: `src/static/logo/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    },
  ],
}
