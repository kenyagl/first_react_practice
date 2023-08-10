import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={
        props.className === "buttonAlt" ? styles.buttonAlt : styles.button
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
