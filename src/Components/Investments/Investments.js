import { useState, useEffect } from "react";
import styles from "./Investments.module.css";
import InvestmentTableHead from "./InvestmentTableHead";
import InvestmentTableBody from "./InvestmentTableBody";

const Investments = (props) => {
  let yearlyData = [];

  useEffect(() => {
    {
      calculateHandler(props.userData);
      console.log("year data: " + JSON.stringify(yearlyData));
    }
  }, [props.userData]);

  const calculateHandler = (inputData) => {
    let currentSavings = +inputData["current-savings"];
    const yearlyContribution = +inputData["yearly-contribution"]; // as mentioned: feel free to change the shape...
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
    yearlyData = updatedYearlyData;

  };

  return (
    <table className={styles.result}>
      <p>{yearlyData.duration}</p>
      <p>{yearlyData.yearlyInterest}</p>
      <InvestmentTableHead />
      <InvestmentTableBody investmentList={yearlyData} />
    </table>
  );
};

export default Investments;
