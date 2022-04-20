import React from "react";
import { ReactDOM } from "react";

const CardComponent = (props) => {
  console.log(props);
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">{props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
