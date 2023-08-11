import React, { useState, useEffect } from "react";
import InputGroup from "./InputGroup";
import styles from "./InvestmentForm.module.css";
import FormActions from "./FormActions";

const INPUT_GROUPS = [
  [
    {
      type: "number",
      id: "current-savings",
      labelText: "Current Savings ($)",
    },
    {
      type: "number",
      id: "yearly-contribution",
      labelText: "Yearly Savings ($)",
    },
  ],
  [
    {
      type: "number",
      id: "expected-return",
      labelText: "Expected Interest (%, per year)",
    },
    {
      type: "number",
      id: "duration",
      labelText: "Investment Duration (years)",
    },
  ],
];

const InvestmentForm = (props) => {
  const [inputData, setInputData] = useState({});

  const calculateHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted. Input data:", inputData);
    setInputData({});
  };

  // useEffect(() => {
  //   console.log("all input data:", inputData);
  // }, [inputData]);

  const formDataHandler = (formGroupData) => {
    setInputData((prevData) => ({ ...prevData, ...formGroupData }));
  };

  return (
    <form className={styles.form} onSubmit={calculateHandler}>
      {INPUT_GROUPS.map((inputGroup) => (
        <InputGroup
          key={`${inputGroup.map((input) => input.id)}`}
          inputList={inputGroup}
          onGroupDataChange={formDataHandler}
          inputDataValue={inputData}
        />
      ))}
      <FormActions />
    </form>
  );
};

export default InvestmentForm;
