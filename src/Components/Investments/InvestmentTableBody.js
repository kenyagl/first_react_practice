import styles from "./InvestmentTableBody.module.css";

const InvestmentTableBody = (props) => {
  return (
    <tbody className={styles.tbody}>
      <tr>
        {/* <td>{props.investmentList[0].year}</td> */}
        <td>TOTAL SAVINGS END OF YEAR</td>
        <td>INTEREST GAINED IN YEAR</td>
        <td>TOTAL INTEREST GAINED</td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>
    </tbody>
  );
};

export default InvestmentTableBody;
