import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data";
import Members from "./components/Members";
import MemberForm from "./components/MemberForm";

function App() {

  const [members, setMembers] = useState([{name:""}]);
  
  const addNewMember = member => {
    const newMember = {
      id: Date.now(), // gives you a unique id
      name: member.name
    };

    //use spread operator to grab every member
    setMembers([...members, newMember]);
  }  

  return (
    <div className="App">
      <h1>My Team</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );

}

export default App;