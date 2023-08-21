import React, { useState, useEffect } from "react";
import "./App.css";
// import { fetchStarWarsCharacters } from './StarWarsAPI';
import { fetchStarWarsCharacters } from "./Cardapi";
import CharacterCard from "./CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);
  // const [showCloseIcons, setShowCloseIcons] = useState(false);

  useEffect(() => {
    fetchStarWarsCharacters().then((data) => setCharacters(data));
  }, []);

  const addCard = () => {
    setCharacters((prevState) => [...prevState, characters.length]);
  };

  const removeCard = (index) => {
    setCharacters((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1 style={{ color: "ActiveBorder", backgroundColor: "Highlight" }}>
        Star Wars characters
      </h1>
      <div className="card-list">
        {characters.slice(0, 3).map((character, index) => (
          <CharacterCard
            key={character.name}
            name={character.name}
            height={character.height}
            films={character.films}
            onClose={() => removeCard(index)}
          />
        ))}
      </div>
      <button onClick={addCard}>Add Card</button>
    </div>
  );
}

export default App;
