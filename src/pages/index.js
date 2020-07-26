import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Top Page</h1>
      <ul>
        {data.posts.edges.map(({ node }) => {
          const {
            title,
            description,
            release_day,
            rewrite_day,
          } = node.frontmatter;
          return (
            <li key={title} className="mt-4">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p>{description}</p>
              <p>{release_day}</p>
              <p>{rewrite_day}</p>
            </li>
          );
        })}
      </ul>
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
