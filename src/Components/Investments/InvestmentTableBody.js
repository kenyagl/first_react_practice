import { useEffect } from "react";
import styles from "./InvestmentTableBody.module.css";

const InvestmentTableBody = (props) => {
  const yearlyData = props.yearData;
  console.log("yearlyData: " + JSON.stringify(yearlyData));
  const displayData = [];

  let totalInterest = 0;
  let investedCapital = yearlyData[0].savingsEndOfYear - yearlyData[0].yearlyContribution - yearlyData[0].yearlyInterest;

  useEffect(() => {
    console.log("invested capital: " + investedCapital);
  }, [investedCapital]);

  for (let i = 0; i < yearlyData.length; i++) {
    totalInterest += yearlyData[i].yearlyInterest;
    investedCapital += yearlyData[i].yearlyContribution;

    const yearData = {
      year: yearlyData[i].year,
      totalSavings: "$"  + yearlyData[i].savingsEndOfYear.toFixed(2),
      interestYear: "$"  + yearlyData[i].yearlyInterest.toFixed(2),
      totalInterest: "$"  + totalInterest.toFixed(2),
      investedCapital: "$"  + investedCapital.toFixed(2),
    };

    displayData.push(yearData);
  }

  console.log("displayData: " + JSON.stringify(displayData));

  return (
    <tbody className={styles.tbody}>
      {displayData.map((dispData) => (
        <tr key={`tr_${dispData.year}`} id={`tr_ ${dispData.year}`}>
          <td>{dispData.year}</td>
          <td>{dispData.totalSavings}</td>
          <td>{dispData.interestYear}</td>
          <td>{dispData.totalInterest}</td>
          <td>{dispData.investedCapital}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default InvestmentTableBody;
