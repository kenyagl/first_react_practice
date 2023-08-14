import React from "react";

const InputItem = (props) => {
  let itemData = {};

  const inputHandler = (event) => {
    itemData = {
      [props.id]: event.target.value,
    };

    props.onDataChange(itemData);
    console.log("Item data: " + JSON.stringify(itemData));
  };

  return (
    <p>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        type={props.type}
        id={props.id}
        onChange={inputHandler}
        value={props.inputDataValue[props.id]}
      />
    </p>
  );
};

export default InputItem;
