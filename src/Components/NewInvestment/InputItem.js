import React from "react";

const InputItem = (props) => {
  const inputHandler = (event) => {
    const updatedInputItemData = {
      [props.id]: event.target.value,
    };
    props.onDataChange(updatedInputItemData);
  };

  return (
    <p>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input type={props.type} id={props.id} onChange={inputHandler} />
    </p>
  );
};

export default InputItem;
