const InputItem = (props) => {
  return (
    <p>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input type={props.type} id={props.id} />
    </p>
  );
};

export default InputItem;
