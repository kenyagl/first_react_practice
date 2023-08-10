import styles from "./InvestmentTableBody.module.css";

const InvestmentTableBody = () => {
  return (
    <tbody className={styles.tbody}>
      <tr>
        <td>YEAR NUMBER</td>
        <td>TOTAL SAVINGS END OF YEAR</td>
        <td>INTEREST GAINED IN YEAR</td>
        <td>TOTAL INTEREST GAINED</td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>
    </tbody>
  );
};

export default InvestmentTableBody;