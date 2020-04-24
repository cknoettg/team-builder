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

  console.log(note);
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
      {/* <label htmlFor="note">Note</label>
      <textarea 
      id="note"
      name="body"
      placeholder="Add your note here."
      value={note.body}
      onChange={handleChanges} */}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default MemberForm;
