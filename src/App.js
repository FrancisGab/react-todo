import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoItem";

const todoList = [
  {
    description: "select each",
    done: false,
    id: 6, // Find out delete based on ID instead of index.
  },
  {
    description: "update",
    done: false,
    id: 7,
  },
  {
    description: "delete",
    done: false,
    id: 9,
  },
  {
    description: "tag",
    done: false,
    id: 8,
  },
];

// Sort Descending value of ID.
// let idCounter = todoList.sort((a, b) => b.id - a.id)[0].id + 1;
let idCounter =
  todoList.reduce((max, item) => {
    return item.id > max ? item.id : max;
  }, 0) + 1;

function App() {
  const [list, setList] = useState(todoList);
  const [bin, updateBin] = useState([]);
  const [input, setInput] = useState("");

  // Matches the index of todoList vs bin via ID.
  function findTodoIndex(id) {
    function checkItemIndex(item) {
      return item.id === parseInt(id);
    }

    // Use Array Find Methods: findIndex().
    return list.findIndex(checkItemIndex);
  }

  // Function Update requires 2 Parameters; Select ID and a new Description.
  function updateTodoItem(id, newDescription) {
    const index = findTodoIndex(id);
    list[index].description = newDescription;
    setList([...list]);
  }

  // Function Delete requires 1 Parameter: Select id.
  function deleteTodoItem(id) {
    const index = findTodoIndex(id);
    list.splice(index, 1); // before splicing use array function called "find index" method.
    setList([...list]);
  }

  // Function Toggle done requires 1 Parameters: Select Index/id
  function toggleDone(id) {
    const index = findTodoIndex(id);
    const todoItem = list[index];
    todoItem.done = !todoItem.done;
    setList([...list]);
  }

  // Function Toggle requires 1 Parameter: Select ID.
  function toggleSelectedTodoItems(todoID) {
    if (bin.includes(todoID)) {
      const index = bin.indexOf(todoID);
      bin.splice(index, 1);
    } else {
      bin.push(todoID);
    }
    updateBin([...bin]);
  }

  // Function for multiple delete.
  function handleEmptyBinClick() {
    while (bin.length !== 0) {
      const todoID = bin.pop();
      deleteTodoItem(todoID);
    }
  }

  // Function for toggle done for selected items.
  function handleToggleDoneBinClick() {
    for (let index = 0; index < bin.length; index++) {
      const id = bin[index];
      toggleDone(id);
    }

    // bin.forEach(toggleDone);
  }

  // Function Add task button.
  function addTodoItem(description) {
    const newTodoItem = {
      description: description,
      done: false,
      id: idCounter,
    };

    list.push(newTodoItem);
    idCounter++;
    setList([...list]);
  }

  // Handle keyDown "Enter"
  function handleKeyDownAddTask(e) {
    if (e.key === "Enter") {
      addTodoItem(input);
      setInput("");
      e.target.blur();
    }
  }

  // Click Handler function is for the last priority for this is the hardest task.
  function handleAddTaskClick(e) {
    addTodoItem(input);
    setInput("");
    e.target.blur();
  }

  return (
    <div className="content-center">
      <div>
        <TodoHeader />
      </div>
      <div>
        <ul>
          {list.map((todoItem, index) => {
            return (
              <TodoItem
                done={todoItem.done}
                key={index}
                // TODO: Can be optimized.
                onCheckboxChange={(e) => {
                  toggleSelectedTodoItems(todoItem.id);
                }}
                onTextChange={(e) => {
                  updateTodoItem(todoItem.id, e.target.value);
                }}
                checked={bin.includes(todoItem.id)}
              >
                {todoItem.description}
              </TodoItem>
            );
          })}
        </ul>
        <div>
          <input
            value={input}
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={handleKeyDownAddTask}
            placeholder="Add new Task..."
            required
          />
        </div>
        <div className="flex gap-1">
          <Button onClick={handleAddTaskClick} disabled={!input}>
            + Save Task
          </Button>
          <Button onClick={handleEmptyBinClick}>- Remove Task</Button>
          <Button onClick={handleToggleDoneBinClick}>Toggle Done Task</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
