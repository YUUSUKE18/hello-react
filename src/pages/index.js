import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import PostsList from "../components/PostsList";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <PostsList posts={data.posts} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPost {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            release_day
            rewrite_day
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
