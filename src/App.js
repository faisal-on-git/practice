import React, { useEffect } from 'react';
import './App.css';
import Counter from './Counter';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import TestWithRouter from './TestWithRouter';
import Home from './Home';
import List from './List';


const handleCallback=(response) => {
  console.log(response);

 
  const credential = google.accounts.id.getAuthResponse();
  const name = google.accounts.id.getBasicProfile().getName();
  console.log('Signed in as:', name);
  document.getElementById('signed-in-as').textContent = `Signed in as: ${name}`;
  document.getElementById('signin-button').hidden = true;
  document.getElementById('signed-in-as').hidden = false;
}
function App() {

  useEffect (() => {
    console.log('App mounted');
    /* global google */
    google.accounts.id.initialize({
      client_id: '413723491284-sa3pehnobtevbtdu71ptpivp5ibhjbm7.apps.googleusercontent.com',
      callback: handleCallback,
    });
    google.accounts.id.renderButton(
      document.getElementById('signin-button'),
      {
        theme: 'outline',
        size: 'large',
      }
    );
}, []);
const handleDisconnect = () => {
  console.log('User signed out.');
};

const handleSignout = () => {
  google.accounts.id.disableAutoSelect();
  

  google.accounts.id.revoke();
  // document.getElementById('signin-button').hidden = true;

}
  




  // const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);



  const [count, setCount] = React.useState(0)

  const increment = () => {
      setCount(count + 1)
  }
  return (
    <div className="App">
  {/* <div id='signin-button'></div>
  <button  onClick={handleSignout}>logout</button> */}



<div id="signin-button"></div>
      <div id="signed-in-as" hidden></div>
      <button onClick={handleSignout}>Sign out</button>

     </div>

  );
}
function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.input.value;
    //of the form event.target.input_name.value
    console.log(inputValue);
  }
const showChanges = (event) => {
  console.log(event.target.value);
}
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="input" onChange={showChanges} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}


function MyComponent() {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(30);
  const [rollNumber, setRollNumber] = useState(12345);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${event.target.name.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:  
        <input type="text" name="name" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}


export default App;
