import React from 'react';
import logo from './logo.svg';
// import './App.css';

const people = [
  {name: 'Tyler'},
  {name: 'James'},
  {name: 'Harris'},
  {name: 'Ernest'}
  ]

function App() {
  return (
    <div className="App">
        <ol>
          {people.map((person) => (
          <li key={person.name}>{person.name}</li>
          ))}
          </ol>
      
    </div>
  );
}

export default App;
