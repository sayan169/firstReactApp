import React from 'react';
import Todo from './Todo';
const list = (props) => {

  // console.log(props.filteredTodos);
    
    return(
        <>
    <div className="todo-container">
      <ul className="todo-list">
        {
           props.filteredTodos.map(todo => {
               return <Todo key = {todo.id} todo = {todo.text} todoElement = {todo} todos = {props.todos} setTodos = {props.setTodos}/>
           })
        }
      </ul>
    </div>
        </>
    );
}

export default list;