import React, { Component } from 'react';



class ContactList extends React.Component{
  render()  {
    const people = this.props.contacts;
    return(
      <ol>
        {people.map((person) => (
        <li key={person.name}>{person.name}</li>
        ))}
        </ol>
    );
  
  }
}


class App extends Component{
  render(){
    return(
      <div className="App">
        <ContactList  contacts={[
            {name: 'Tyler'},
            {name: 'James'},
            {name: 'Harris'},
            {name: 'Ernest'}
        ]}/>
        <ContactList  contacts ={[
            {name: 'Marino'},
            {name: 'John'},
            {name: 'Hosea'},
            {name: 'Noela'}
        ]}/>

      </div>
    );

  }
}



export default App;

