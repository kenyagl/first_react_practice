import React, { useState, useEffect } from "react";

const InputItem = (props) => {
  // const [inputItemData, setInputItemData] = useState("");

  // useEffect(() => {
  //   setInputItemData(props.inputDataValue);
  // }, [props.inputDataValue]);

  const inputHandler = (event) => {
    const updatedInputItemData = {
      [props.id]: event.target.value,
    };

    // setInputItemData(event.target.value);
    props.onDataChange(updatedInputItemData);
  };

  const valueAssignHandler = () => {
    if (props.id in props.inputDataValue) {
      return props.inputDataValue[props.id];
    }
  }

  return (
    <p>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input type={props.type} id={props.id} onChange={inputHandler} value={valueAssignHandler} />
    </p>
  );
};

export default InputItem;
