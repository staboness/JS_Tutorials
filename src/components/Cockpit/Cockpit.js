import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context'

import classes from './Cockpit.css';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);

  console.log(authContext.auth);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      /* alert('Saved data to cloud!'); */
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); 
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>

        <button onClick={authContext.login}>Log in</button>

    </div>
  );
};

export default React.memo(Cockpit);
