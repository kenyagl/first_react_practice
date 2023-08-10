import styles from "./Investments.module.css";
import InvestmentTableHead from "./InvestmentTableHead";
import InvestmentTableBody from "./InvestmentTableBody";

const Investments = () => {
  return (
    <table className={styles.result}>
      <InvestmentTableHead />
      <InvestmentTableBody />
    </table>
  );
};

export default Investments;
