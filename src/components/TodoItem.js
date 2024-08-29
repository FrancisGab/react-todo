function TodoItem({
  children,
  onCheckboxChange = () => {},
  checked = false,
  onTextChange = () => {},
  done = false,
}) {
  function handleKeyDown(e) {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.target.blur();
    }
  }
  let className = "text-red-500";
  if (done) {
    className += " line-through";
  }

  return (
    <li>
      <input type="checkbox" onChange={onCheckboxChange} checked={checked} />
      <input
        type="text"
        // TODO set variable for className.
        className={className}
        onChange={onTextChange}
        value={children}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
}

export default TodoItem;
