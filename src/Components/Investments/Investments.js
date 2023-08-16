import { useState, useEffect } from "react";
import styles from "./Investments.module.css";
import InvestmentTableHead from "./InvestmentTableHead";
import InvestmentTableBody from "./InvestmentTableBody";

const Investments = (props) => {
  const [yearlyData, setYearlyData] = useState([]);

  useEffect(() => {
    {
      calculateHandler(props.userData);
    }
  }, [props.userData]);

  const calculateHandler = (inputData) => {
    let currentSavings = +inputData["current-savings"];
    const yearlyContribution = +inputData["yearly-contribution"];
    const expectedReturn = +inputData["expected-return"] / 100;
    const duration = +inputData["duration"];

    const updatedYearlyData = [];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      const newSavings = currentSavings + yearlyInterest + yearlyContribution;
      
      updatedYearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: newSavings,
        yearlyContribution: yearlyContribution,
      });

      currentSavings = newSavings;
    }
    setYearlyData(updatedYearlyData);
  };

  return (
    <table className={styles.result}>
      <InvestmentTableHead />
      <InvestmentTableBody yearData={yearlyData} />
    </table>
  );
};

export default Investments;
