import React from "react";
import PropTypes from "prop-types";
import PostsListItem from "./PostsListItem";

const PostsList = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.edges.map(({ node }) => {
          return <PostsListItem frontmatter={node.frontmatter} />;
        })}
      </ul>
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
