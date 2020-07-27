import React from "react";
import PropsTypes from "prop-types";

const PostsListItem = ({ frontmatter }) => {
  const { title, description, release_day, rewrite_day } = frontmatter;
  return (
    <li key={title} className="mt-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p>{description}</p>
      <p>{release_day}</p>
      <p>{rewrite_day}</p>
    </li>
  );
};

PostsListItem.propTypes = {
  frontmatter: PropTypes.object,
};

export default PostsListItem;
