import React from "react";

const user = props => {
  return (
    <div>
      <p>
        im {props.name} and {props.age} years old
      </p>
      <p>{props.children} </p>
    </div>
  );
};

export default user;
