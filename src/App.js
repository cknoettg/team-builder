import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data";

function App() {

  const [members, setMembers] = useState([id:"",name:""]);
  
  const addNewMember = member => {
    const newMember = {
      id: Date.now(), // gives you a unique id
      name: member.name
    };
  }
  
  //use spread operator to grab every member
  setMember([...members, newMember])

  return (
    <div className="App">
      <h1>My Team</h1>
      
    </div>
  );

}

export default App;