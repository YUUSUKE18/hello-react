module.exports = {
  siteMetadata: {
    title: "Hello React",
    description: "This is React Blog!",
    siteUrl: "https://yuusuke18.github.io/hello-react/.",
    author: "Yuusuke Okamoto",
  },
  pathPrefix: "/hello-react",
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
        ],
      },
    },
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
