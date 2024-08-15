function TodoItem({
  children,
  onCheckboxChange = () => {},
  checked = false,
  onTextChange = () => {},
}) {
  function handleKeyDown(e) {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.target.blur();
    }
  }

  return (
    <li>
      <input type="checkbox" onChange={onCheckboxChange} checked={checked} />
      <input
        type="text"
        onChange={onTextChange}
        value={children}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
}

export default TodoItem;
