import React from "react";
import './Members.css';

const Members = props => {
  return (
    <div className="member-list">
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <h2>{member.email}</h2>
          <h2>{member.role}</h2>
        </div>
      ))}
    </div>
  );
};

export default Members;