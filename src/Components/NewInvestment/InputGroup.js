import React, { useState, useEffect } from "react";
import InputItem from "./InputItem";
import styles from "./InputGroup.module.css";

const InputGroup = (props) => {
  const [inputGroupData, setInputGroupData] = useState({});

  // This effect runs whenever inputGroupData changes
  useEffect(() => {
    console.log("group data:", inputGroupData);
  }, [inputGroupData]);

  const inputHandler = (inputDataItem) => {
    // Update the state and let the effect handle the logging
    setInputGroupData((prevGroupData) => ({
      ...prevGroupData,
      ...inputDataItem,
    }));
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
        />
      ))}
    </div>
  );
};

export default InputGroup;