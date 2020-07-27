import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Bio from "../components/Bio";

const BlogPost = ({ data }) => {
  const { markdownRemark, site } = data;
  const { author } = site.siteMetadata;
  const { frontmatter, html } = markdownRemark;
  const { release_day, title, featuredImage } = frontmatter;
  return (
    <Layout>
      <div className="w-full bg-white">
        <div className="flex justify-center items-center max-w-screen-xl mt-5 px-4 m-auto relative">
          <div className="relative w-full h-full min-h-full">
            <div className="absolute w-full h-full bg-black opacity-50 z-20"></div>
            <Img
              fluid={featuredImage.childImageSharp.fluid}
              className="w-full z-10"
              style={{ maxHeight: "320px" }}
            />
          </div>
          <div className="absolute text-gray-100 z-30">
            <h1 className="text-3xl md:text-4xl mb-2 text-center">{title}</h1>
            <div className="flex justify-between pb-2 font-light">
              <h3 className="mr-2">{author}</h3>
              {data ? <h3>{release_day}</h3> : null}
            </div>
          </div>
        </div>
        <div className="p-3">
          <div
            className="leading-loose tracking-wide"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
          <Bio />
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        release_day
        rewrite_day
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
  }
`;

export default BlogPost;
