import React, { useState } from "react";

const Form = props => {
  // console.log("this is our props",props);
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChanges = event => {
    console.log("event", event.target.value);
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  // will use onSubmit synthetic event
  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: ""})
  }

  console.log(member);
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input 
      id="name" 
      onChange={handleChanges} 
      type="text" 
      placeholder="Enter name" 
      value={member.name}
      name="name" />    
      <button type="submit">Add Team Member Name</button>
      <label htmlFor="email">E-mail</label>
      <input 
      id="email" 
      onChange={handleChanges} 
      type="text" 
      placeholder="Enter e-mail address" 
      value={member.email}
      name="email" />    
      <button type="submit">Add Email Address</button>
      <label htmlFor="role">Role</label>
      <input 
      id="role" 
      onChange={handleChanges} 
      type="text" 
      placeholder="Enter role" 
      value={member.role}
      name="role" />    
      <button type="submit">Add Role</button>
    </form>
  );
};

export default Form;
