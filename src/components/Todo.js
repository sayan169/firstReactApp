import React from 'react';

const Todo = (props) => {

    const deleteHandler = () => {
        props.setTodos(props.todos.filter(element => element.id !== props.todoElement.id)); // This is comparing the id of the element I am clicking, with the element that is currently in the state.
          
        // console.log(props.todoElement);
    }

    const completeHandler = () => {                 // Mapping the todos array and changing the done property to true 
        props.setTodos(props.todos.map(element => {
            if(element.id === props.todoElement.id){
                return{
                    ...element,
                    done: !element.done
                }
            }
            return element;
        }));
    }
    return(
        <React.StrictMode>
        <div className="todo">
            
            <li className={`todo-item ${props.todoElement.done ? "completed" : ""}` }>{props.todo}</li>
            
            <button type='button' className='complete-btn' onClick={completeHandler}><i  className = 'fas fa-check'></i></button>
            <button type='button' className='trash-btn' onClick={deleteHandler}><i className = 'fas fa-trash'></i></button>
        </div>
        </React.StrictMode>
    );
}

export default Todo;