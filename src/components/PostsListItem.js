import React from "react";
import PropsTypes from "prop-types";
import { Link } from "gatsby";

const PostsListItem = ({ post }) => {
  const { frontmatter, fields } = post;
  const { title, release_day, rewrite_day } = frontmatter;
  return (
    <li key={title} className="mt-4 hover:text-gray-500 cursor-pointer">
      <Link to={fields.slug}>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <div className="date">
          <span className="mr-2 text-sm text-gray-500">
            公開日: {release_day}
          </span>
          <span className="text-sm text-gray-500">更新日:{rewrite_day}</span>
        </div>
      </Link>
    </li>
  );
};

PostsListItem.propsTypes = {
  frontmatter: PropsTypes.object,
};

export default PostsListItem;
