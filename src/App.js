import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Some', age: 21 },
      { name: 'Hot', age: 26 }
    ]
  });

  const switchNameHandler = (newName) => {
    // DONT DO THIS: this.state.persons[0].name = "Modified name";
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Some', age: 21 },
        { name: 'Hot', age: 24 }
      ]
    })
  };

  const nameChangedHandler = (event) => {
      setPersonsState({
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 21 },
          { name: 'Hot', age: 24 }
        ]
      })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is rly working!</p>
      <button 
      style={style}
      onClick={() => switchNameHandler('Maximillian!')}>Switch Name</button>

      <Person 
      name={personsState.persons[0].name} 
      age={personsState.persons[0].age} 
      click={switchNameHandler.bind(this, 'MAXIMILLIAN!')}>
      My Hobbies: Racing
         </Person>

      <Person 
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age} 
      changed={nameChangedHandler}/>


      <Person 
      name={personsState.persons[2].name} 
      age={personsState.persons[2].age} />
    </div>
  );

}
export default app;