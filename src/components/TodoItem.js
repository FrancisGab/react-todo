function TodoItem({ value }) {
  return (
    <li>
      <input type="checkbox" />
      {value}
    </li>
  );
}

export default TodoItem;
