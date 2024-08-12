function Button({ value, onButtonClick }) {
  return (
    <button className="button" onClick={onButtonClick}>
      {value}
    </button>
  );
}

export default Button;
