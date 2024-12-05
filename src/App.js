import React, { useState } from 'react';
import './App.css'; // Ensure styling is in App.css

const App = () => {
  // Initial dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  // Handle search
  const handleSearch = () => {
    const foundWord = dictionary.find(item => 
      item.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition('Word not found in the dictionary.');
    }
  };

  return (
    <div className="app">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="definition-container">
        <p className="definition">
          <strong>Definition:</strong> {definition}
        </p>
      </div>
    </div>
  );
};

export default App;
