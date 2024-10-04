import { useState } from "react";
import "./todo.css"

function TodoApp(){
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue && dateValue) {
      const newTodo = { text: inputValue, date: dateValue };
      setTodos([...todos, newTodo]);
      setInputValue('');
      setDateValue('');
    }
  };

  const editTodo = (index) => {
    setInputValue(todos[index].text);
    setDateValue(todos[index].date);
    setEditIndex(index);
    const updatedTodos = todos.filter((task, idx) => idx !== index);
    setTodos(updatedTodos);
  };

   

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((task, idx) => idx !== index);
    setTodos(updatedTodos);
  };

   
  return (
    <div className='main'>
       <div className="head">
       <h2>Todo App</h2>
        <input 
          type="text" 
          placeholder="Todo" 
          value={inputValue} 
          onChange={handleInputChange} 
        /><br></br>
        <input 
          type="date" 
          value={dateValue} 
          onChange={handleDateChange} 
        />
        <br></br>
        <button type="submit" onClick={addTodo}>Add</button>
        <hr></hr>
       </div>
       <div className="list">
       <ul>
        {todos.map((todo, index) => (
           <>
           <li key={index}>
            <span>{todo.text} (Due: {todo.date})</span> &nbsp; &nbsp;
            <i style={{color:"#008000"}} className="fa-solid fa-user-pen" onClick={() =>editTodo(index)}></i>&nbsp; &nbsp;
            <i style={{color:"#d11a2a"}} onClick={()=>deleteTodo(index)} className="fa-solid fa-trash"></i>  
          </li>
          <hr></hr>
           </>
        ))}
      </ul>
       </div>
    </div>
  );
};

export default TodoApp;
