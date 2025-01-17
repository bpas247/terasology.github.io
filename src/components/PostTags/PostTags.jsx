import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

export default class PostTags extends React.Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <button>{tag}</button>
            </Link>
          ))}
      </div>
    );
  }
}
