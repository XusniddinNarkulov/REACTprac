import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = { kalitSuz: "" };
    // this.inputMalumot = this.inputMalumot.bind(this);
  }

  // state = { kalitSuz: "" };

  inputMalumot = (e) => {
    this.setState({ kalitSuz: e.target.value });
  };

  formOnSubmit = (e) => {
    e.preventDefault();
    this.props.malumotniOl(this.state.kalitSuz);
    // this.setState({ kalitSuz: "" });
  };

  render() {
    return (
      <div style={{}}>
        <form onSubmit={this.formOnSubmit} className="ui category search">
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              onChange={this.inputMalumot}
              className="prompt"
              type="text"
              placeholder="Search animals..."
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
