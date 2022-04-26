import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar.js";
import ImageList from "./ImageList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageArr: [], per: 10 };
  }

  searchdanMalumotniOl = async (imgData) => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: imgData,
        per_page: this.state.per,
      },
      headers: {
        Authorization: "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
      },
    });
    this.setState({ imageArr: data.data.results });
    console.log(data);
  };

  loadMore = async () => {
    this.setState((old) => {
      return { per: old.per + 10 };
    });
  };

  render() {
    return (
      <div>
        <SearchBar malumotniOl={this.searchdanMalumotniOl} />
        <ImageList dataImg={this.state.imageArr} />
        <button onClick={this.loadMore}>Loadmore</button>
        {/* <div>{this.state.imageArr.length}</div> */}
      </div>
    );
  }
}

export default App;
