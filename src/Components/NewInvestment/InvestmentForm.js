import InputGroup from "./InputGroup";
import styles from "./InvestmentForm.module.css";
import FormActions from "./FormActions";

const InvestmentForm = () => {
  const inputGroups = [
    [
      {type: "number", id: "current-savings", labelText: "Current Savings ($)"},
      {type: "number", id: "yearly-contribution", labelText: "Yearly Savings ($)"},
    ],
    [
      {type: "number", id: "expected-return", labelText: "Expected Interest (%, per year)"},
      {type: "number", id: "duration", labelText: "Investment Duration (years)"},
    ],
  ];

  return (
    <form className={styles.form}>
      {inputGroups.map((inputGroup) => (
        <InputGroup inputList={inputGroup} />
      ))}
      <FormActions />
    </form>
  );
};

export default InvestmentForm;
