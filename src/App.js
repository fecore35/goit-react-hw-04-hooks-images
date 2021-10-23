import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

class App extends Component {
  state = {
    searchQuery: "",
  };

  handlerSearchQuery = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handlerSearchQuery} />

        <ImageGallery searchQuery={this.state.searchQuery} />
      </div>
    );
  }
}

export default App;
