import React from 'react';

const people = [
  {name: 'Tyler'},
  {name: 'James'},
  {name: 'Harris'},
  {name: 'Ernest'}
  ]

class ContactList extends React.Component{
  render()  {
    return(
      <ol>
        {people.map((person) => (
        <li key={person.name}>{person.name}</li>
        ))}
        </ol>
    );
  
  }
}


class App extends React.Component{
  render(){
    return(
      <div className="App">
        <ContactList />

      </div>
    )
   
    

  }


export default App;

