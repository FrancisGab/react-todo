function TodoItem({ children, onChange = () => {}, checked = false }) {
  return (
    <li>
      <input type="checkbox" onChange={onChange} checked={checked} />
      {children}
    </li>
  );
}

export default TodoItem;
