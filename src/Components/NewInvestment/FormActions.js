import styles from "./FormActions.module.css";
import Button from "../UI/Button";

const FormActions = (props) => {
  return (
    <p className={styles.actions}>
      <Button type="reset" className="buttonAlt">
        Reset
      </Button>
      <Button type="submit" className="button">
        Calculate
      </Button>
    </p>
  );
};

export default FormActions;
