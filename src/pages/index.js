import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import PostsList from "../components/PostsList";

const IndexPage = ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Top Page</h1>
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
        }
      }
    }
  }
`;

export default IndexPage;
