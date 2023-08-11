import React, { useState, useEffect } from "react";
import InputItem from "./InputItem";
import styles from "./InputGroup.module.css";

const InputGroup = (props) => {
  const [inputGroupData, setInputGroupData] = useState({});

  useEffect(() => {
    props.onGroupDataChange(inputGroupData);
  }, [inputGroupData]);

  const inputHandler = (inputDataItem) => {
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
          inputDataValue={props.inputDataValue}
        />
      ))}
    </div>
  );
};

export default InputGroup;