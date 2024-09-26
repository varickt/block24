import { useState } from 'react';
import { puppyList } from './data.js';

import './App.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // Find the selected puppy using featPupId
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <h1>Puppy Names</h1>
      {puppies.map((puppy) => (
        <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}

      {/* Conditionally render the selected puppy's details */}
      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
