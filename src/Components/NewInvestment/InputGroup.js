import InputItem from "./InputItem";
import styles from "./InputGroup.module.css";

const InputGroup = (props) => {
  return (
    <div className={styles["input-group"]}>
      {props.inputList.map((inputItem) => (
        <InputItem
          type={inputItem.type}
          id={inputItem.id}
          labelText={inputItem.labelText}
        />
      ))}
    </div>
  );
};

export default InputGroup;
