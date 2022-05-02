import React from "react";
// import "./ImageCard.css";
import "./ImageList.css";

class ImageCard extends React.Component {
   constructor(props) {
      super(props);
      this.state = { spans: 0 };
      this.imageDOM = React.createRef();
   }

   setSpan = () => {
      const height = this.imageDOM.current.clientHeight + 10;
      this.setState({ spans: height });
      console.log(height);
   };

   componentDidMount() {
      this.imageDOM.current.addEventListener("load", this.setSpan());
      console.log(this.imageDOM);
   }

   render() {
      return (
         <img
            ref={this.imageDOM}
            key={this.props.data.id}
            // height="150px"
            style={{ gridRowEnd: `span ${this.state.spans}` }}
            alt={this.props.data.alt_description}
            src={this.props.data.urls.regular}
         />
      );
   }
}

export default ImageCard;
