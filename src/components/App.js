import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { imageArr: [] };

  searchdanMalumotniOl = async (imgData) => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: imgData,
        per_page: 10,
      },
      headers: {
        Authorization: "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
      },
    });
    this.setState({ imageArr: data.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar malumotniOl={this.searchdanMalumotniOl} />
        <ImageList dataImg={this.state.imageArr} />
        <button>Loadmore</button>
        {/* <div>{this.state.imageArr.length}</div> */}
      </div>
    );
  }
}

export default App;
