import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { kalit: "" };

  searchdanMalumotniOl = (data) => {
    // console.log(data);
    this.setState({ kalit: data });
    console.log(this.state.kalit);
  };

  getData = async () => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: this.state.kalit,
      },
      headers: {
        Authorization: "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
      },
    });
    console.log(data.data.results);
  };

  componentDidUpdate() {
    this.getData();
  }

  render() {
    return (
      <div>
        <SearchBar malumotniOl={this.searchdanMalumotniOl} />
        <ImageList />
      </div>
    );
  }
}

export default App;
