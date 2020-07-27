import React from "react";
import PropsTypes from "prop-types";
import PostsListItem from "./PostsListItem";

const PostsList = ({ posts }) => {
  return (
    <div>
      <ul className="flex-col mx-auto px-8 mt-5 max-w-screen-lg">
        {posts.edges.map(({ node }, index) => {
          return <PostsListItem key={index} post={node} />;
        })}
      </ul>
    </div>
  );
};

PostsList.propTypes = {
  posts: PropsTypes.object.isRequired,
};

export default PostsList;
