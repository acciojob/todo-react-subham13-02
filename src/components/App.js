
import React,{useState} from "react";
import './../styles/App.css';
//import { set } from "cypress/types/lodash";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
        {todos.map((todo, index) => (
          <div key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default App
