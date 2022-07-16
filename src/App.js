import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [inputText,setInputText] = useState(''); 
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos,setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  //Use Effect to filter the todos
  useEffect(() => {
    filterTodos();
    saveLocal();
  }, [todos,status]);
  
  //Filtering the todos for completed or uncompleted
  const filterTodos = () => {
    if(status === 'completed'){
      setFilteredTodos(todos.filter(element => element.done === true));
    }

    else if(status === 'uncompleted'){
      setFilteredTodos(todos.filter(element => element.done === false));
    }

    else{
      setFilteredTodos(todos);
    }
  }

  //Saving to localstorage
  const saveLocal = () => {
    if(todos.length > 0){
      
        localStorage.setItem('todos',JSON.stringify(todos)); 
    }
  }

  //Loading from localstorage
  const getLocal = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
      const todoLocal = JSON.parse(localStorage.getItem('todos'));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  }
  return (
    <>
    <header>
      <h1>Sayan's TODO List</h1>
    </header>
    <Form inputText = {inputText} todos = {todos} setTodos = {setTodos} setInputText = {setInputText} setStatus = {setStatus}/>
    <List  inputText = {inputText} todos = {todos} setTodos = {setTodos} filteredTodos = {filteredTodos}/>
    </>
  );
}

export default App;
