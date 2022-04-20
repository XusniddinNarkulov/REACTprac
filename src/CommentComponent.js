import React from "react";
import { ReactDOM } from "react";

import { faker } from "@faker-js/faker";

const CommentComponent = (props) => {
  console.log(props);
  return (
    <div className="comment">
      <a className="avatar">
        <img src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a className="author">{props.name}</a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">{props.comment}</div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
