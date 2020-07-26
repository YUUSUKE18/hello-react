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
        // icon: `src/static/logo/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
      //   resolve: `gatsby-source-filesystem`,
      //   options: {
      //     name: `data`,
      //     path: `${__dirname}/src/data`,
      //   },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: ["300", "400", "500"],
          },
          {
            family: "Lobster",
            variants: ["300", "400", "500"],
          },
          {
            family: "Rubik",
            variants: ["300", "400", "500", "700", "900"],
          },
        ],
      },
    },
  ],
};
