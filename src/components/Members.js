import React from "react";

const Notes = props => {
  return (
    <div className="member-list">
      {props.notes.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Members;