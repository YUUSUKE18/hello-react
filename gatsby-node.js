const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const graphql = require("gatsby");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `${__dirname}/content/blog`,
    });

    //console.log("slug", slug);

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js");

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: BlogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
