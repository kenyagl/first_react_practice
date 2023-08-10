import { useState } from "react";
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
  const calculateHandler = (event) => {
    event.preventDefault();
    console.log("calculating");
  };

  return (
    <form className={styles.form} onSubmit={calculateHandler}>
      {INPUT_GROUPS.map((inputGroup) => (
        <InputGroup
          key={`${inputGroup.map((input) => input.id)}`}
          inputList={inputGroup}
        />
      ))}
      <FormActions />
    </form>
  );
};

export default InvestmentForm;
