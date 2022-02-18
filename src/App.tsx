import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/input_field';
import { Todo } from './model/todo';
import TodoList from './components/todo_list';
import SingleTodo from './components/single_todos';

const App: React.FC = () =>  {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo:todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
     <span className='heading'>TaskiFy</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
