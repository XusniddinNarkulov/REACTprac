import React, { createRef } from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard.js";

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  imageRender = () => {
    return this.props.dataImg.map((val, key) => {
      return <ImageCard data={val} />;
    });
  };

  render() {
    return <div className="img-list">{this.imageRender()}</div>;
  }
}

export default ImageList;
