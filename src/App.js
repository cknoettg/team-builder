import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data";
import Members from "./components/Members";
import Form from "./components/Form";

function App() {

  const [members, setMembers] = useState([{name:"", email:"", role:""}]);
  
  const addNewMember = member => {
    const newMember = {
      id: Date.now(), // gives you a unique id
      name: member.name,
      email: member.email,
      role: member.role
    };

    //use spread operator to grab every member
    setMembers([...members, newMember]);
  }  

  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );

}

export default App;