import { useState } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="App">
      <Searchbar onSubmit={setSearchQuery} />

      <ImageGallery searchQuery={searchQuery} />
    </div>
  );
}

// class OldApp extends Component {
//   state = {
//     searchQuery: "",
//   };

//   handlerSearchQuery = (searchQuery) => {
//     this.setState({ searchQuery });
//   };

//   render() {
//     return (
//       <div className="App">
//         <Searchbar onSubmit={this.handlerSearchQuery} />

//         <ImageGallery searchQuery={this.state.searchQuery} />
//       </div>
//     );
//   }
// }

export default App;
