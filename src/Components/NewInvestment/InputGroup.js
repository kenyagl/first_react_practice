import React from "react";
import InputItem from "./InputItem";
import styles from "./InputGroup.module.css";

const InputGroup = (props) => {
  let inputGroupData = {};

  const inputHandler = (inputDataItem) => {
    const updatedData = { ...inputGroupData, ...inputDataItem };
    inputGroupData = updatedData;
    props.onGroupDataChange(inputGroupData);
  };

  return (
    <div className={styles["input-group"]}>
      {props.inputList.map((inputItem) => (
        <InputItem
          key={inputItem.id}
          type={inputItem.type}
          id={inputItem.id}
          labelText={inputItem.labelText}
          onDataChange={inputHandler}
          inputDataValue={props.inputDataValue}
        />
      ))}
    </div>
  );
};

export default InputGroup;
