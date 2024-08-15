import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoItem";

const todoList = [
  {
    description: "select each",
    done: false,
    id: 1, // Find out delete based on ID instead of index.
  },
  {
    description: "update",
    done: false,
    id: 2,
  },
  {
    description: "delete",
    done: false,
    id: 3,
  },
  {
    description: "tag",
    done: false,
    id: 4,
  },
];

let idCounter = 5;

function App() {
  const [list, setList] = useState(todoList);
  const [bin, updateBin] = useState([3]);

  // Matches the index of todoList vs bin via ID.
  function findTodoIndex(id) {
    function checkItemIndex(item) {
      return item.id === parseInt(id);
    }

    // Use Array Find Methods: findIndex().
    return todoList.findIndex(checkItemIndex);
  }

  // Function Update requires 2 Parameters; Select ID and a new Description.
  function updateTodoItem(id, newDescription) {
    const index = findTodoIndex(id);
    const todoItem = todoList[index];
    todoItem.description = newDescription;
  }

  // Function Delete requires 1 Parameter: Select id.
  function deleteTodoItem(id) {
    const index = findTodoIndex(id);
    todoList.splice(index, 1); // before splicing use array function called "find index" method.
  }

  // Function Toggle done requires 1 Parameters: Select Index/id
  function toggleDone(id) {
    const index = findTodoIndex(id);
    const todoItem = todoList[index];
    todoItem.done = !todoItem.done;
    console.log(todoItem);
  }

  // Function Add Task requires 1 Parameter: Add new Description
  function addTodoItem(description) {
    const newTodoItem = {
      description: description,
      done: false,
      id: idCounter, // Assign the current ID
    };
    todoList.push(newTodoItem);
    idCounter++;
  }

  // TO DO TASK - Select item.
  function handleSelectItemClick() {
    alert("Checkbox ticked!");
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
  function emptyBin() {
    while (bin.length !== 0) {
      const todoID = bin.pop();
      deleteTodoItem(todoID);
    }
  }

  // Function for toggle done for selected items.
  function toggleDoneBin() {
    for (let id = bin.length; id >= 1; id--) {
      toggleDone(id);
    }
  }

  // TO DO TASK - Handla last priority for this is the hardest task.
  function handleAddTaskClick() {
    list.push({
      description: "eat",
      done: false,
      id: list.length + 1,
    });
    console.log(list);
    // Rerenders the webpage.
    setList([...list]);
  }

  // TO DO TASK - Delete task item.
  function handleRemoveTaskClick() {
    list.splice(-1);
    setList([...list]);
  }

  // TO DO TASK - Finish other buttons function.
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
          {list.map((todoItem, index) => {
            return (
              <TodoItem
                key={index}
                // Can be optimized.
                onChange={() => toggleSelectedTodoItems(todoItem.id)}
                checked={bin.includes(todoItem.id)}
              >
                <span contentEditable={true}>{todoItem.description}</span>
              </TodoItem>
            );
          })}
        </ul>
        <form>
          <input
            type="text"
            name="myInput"
            placeholder="Add new Task..."
            required
          />
        </form>
        <Button onClick={handleAddTaskClick}>+ Save Task</Button>
        <Button onClick={handleRemoveTaskClick}>- Remove Task</Button>
        <Button onClick={handleClick}>Toggle Done Task</Button>
      </div>
    </>
  );
}

export default App;
