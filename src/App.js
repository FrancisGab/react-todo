import "./App.css";
import Button from "./components/Button";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoList";

function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <>
      <div>
        <TodoHeader />
      </div>
      <div>
        <ul>
          <TodoItem value="Select each" />
          <TodoItem value="Update" />
          <TodoItem value="Delete" />
          <TodoItem value="Tag" />
        </ul>
        <form>
          <input
            type="text"
            name="myInput"
            placeholder="Add new Task..."
            required
          />
        </form>
        <Button value="+ Save Task" onButtonClick={handleClick} />
        <Button value="- Remove Task" onButtonClick={handleClick} />
        <Button value="Toggle Done" onButtonClick={handleClick} />
      </div>
    </>
  );
}

export default App;
