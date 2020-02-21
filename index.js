import React from "react";
import ReactDOM from "react-dom";

const people = [
  {name: 'Tyler'},
  {name: 'James'},
  {name: 'Harris'},
  {name: 'Ernest'}
]

const element = 
<ol>
  {people.map((person) => (
    <li>{person.name}</li>
  ))}
</ol>
//  React.createElement('li', null, 'hello hozea'),
//  React.createElement('li', null, 'hello marino'),
//  React.createElement('li', null, 'hello james'),
//  React.createElement('li', null, 'hello winnie'))


ReactDOM.render(
  element,
  document.getElementById('root')
  );
