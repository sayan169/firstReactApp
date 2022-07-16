import React from 'react';
import ReactDOM from 'react-dom';

const Form = (props) => {

    const inputHandler = (e) => {
        // console.log(e.target.value);
        // console.log(props.inputText);
        props.setInputText(e.target.value);
    }

    const todoHandler = () => {
        props.setTodos([
            ...props.todos, {text: props.inputText, done: false, id: Math.trunc(Math.random() * 100,0)+1}
        ]);

        props.setInputText(''); // Clearing the input text
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value);
    }

    
   
    return(
    <form>
        <input value={props.inputText} type="text" className="todo-input" onChange={inputHandler} />
        <button onClick={todoHandler} className="todo-button" type="button">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    );
}

export default Form;