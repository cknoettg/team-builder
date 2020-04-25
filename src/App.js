import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data";
import Members from "./components/Members";
import Form from "./components/Form";

function App() {

  const [members, setMembers] = useState(data);
  
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
      
      {/* we will decide later if we want to use this or not 
      <div>
        <ul>
        {members.map(member => {
            return [<li key={member.name}>{member.name}</li>,
            <li key={member.email}>{member.email}</li>,
            <li key={member.role}>{member.role}</li>,<br></br>
          ]
        })}
        </ul>
      </div> */}
    </div>
  );

}

export default App;