import React, { useState } from 'react';
import './App.css'; // Assuming you'll style it in this file

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
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <p><strong>Definition:</strong> {definition}</p>
    </div>
  );
};

export default App;
