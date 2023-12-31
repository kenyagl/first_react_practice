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
  let inputData = {};

  const formDataHandler = (formGroupData) => {
    const updatedData = {...inputData, ...formGroupData};
    inputData = updatedData;
    props.onDataChange(inputData);
  };

  return (
    <form
      className={styles.form}
      onSubmit={props.onCalculate}
      onReset={props.onReset}
    >
      {INPUT_GROUPS.map((inputGroup) => (
        <InputGroup
          key={`${inputGroup.map((input) => input.id)}`}
          inputList={inputGroup}
          onGroupDataChange={formDataHandler}
          inputDataValue={props.inputDataValue}
        />
      ))}
      <FormActions />
    </form>
  );
};

export default InvestmentForm;
