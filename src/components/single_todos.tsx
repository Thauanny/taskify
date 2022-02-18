import React from 'react';
import { Todo } from '../model/todo';
import {  FiEdit3 } from 'react-icons/fi';
import {  MdDeleteForever, MdOutlineDone } from 'react-icons/md';

import "./style.css"


interface Props{
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos} : Props) => {

  const handleDone = (id:number) =>{
    setTodos(todos.map((todo)=>todo.id===id? {...todo, isDone: !todo.isDone} : todo));
  };

  const handleDelete = (id: number) => {
     setTodos(todos.filter((todo) => todo.id !== id));
  }


  return (
    <form className='todos__single'> 
    {
      todo.isDone ?
        (<s className="todos__single--text">{todo.todo}</s>) : 
        (<span className='todos__single--text'>{todo.todo}</span>)
    }
     
      <div>
        <span className='icon'>
          <FiEdit3/>
        </span>
        <span className='icon' onClick={()=>handleDelete(todo.id)}>
          <MdDeleteForever/>
        </span>
        <span className='icon' onClick={()=>handleDone(todo.id)}>
          <MdOutlineDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo