import React, { useState } from "react";

const MemberForm = props => {
  // console.log("this is our props",props);
  const [member, setMember] = useState({ id: "", name: "" });

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
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default MemberForm;
