import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import CardsList from "./components/CardsList";

import fantasy from "./data/fantasy.json";
import scifi from "./data/scifi.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import history from "./data/history.json";
import Welcome from "./components/Welcome";

function App() {
  const [genre, setGenre] = useState("fantasy");

  const dataMap = {
    fantasy,
    scifi,
    horror,
    romance,
    history,
  };

  return (
    <div className="d-flex flex-column vh-100 overflow-hidden">
      <header>
        <NavBar setGenre={setGenre} />
        <Welcome />
      </header>

      <main className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-wrap justify-content-center">
          <CardsList books={dataMap[genre]} />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
