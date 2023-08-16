import styles from "./InvestmentTableBody.module.css";

const InvestmentTableBody = (props) => {
  const yearlyData = props.yearData;
  const displayData = [];

  let totalSavings = 0;
  let totalInterest = 0;
  let investedCapital = 0;

  for (let i = 0; i < yearlyData.length; i++) {
    totalSavings += yearlyData[i].savingsEndOfYear;
    totalInterest += yearlyData[i].yearlyInterest;
    investedCapital += yearlyData[i].yearlyContribution;

    const yearData = {
      year: yearlyData[i].year,
      totalSavings: totalSavings, 
      interestYear: yearlyData[i].yearlyInterest,
      totalInterest: totalInterest, 
      investedCapital: investedCapital
    }

    displayData.push(yearData);
  }

  return (
    <tbody className={styles.tbody}>
      {displayData.map((dispData) => (
        <tr>
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
