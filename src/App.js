import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';
import './App.css';

function App() {
  const [listTodo,setListTodo] = useState([]);

  let addList = (inputText)=>{
    if(inputText)
      setListTodo([...listTodo,inputText]);
  }

  const deleteListItem = (key)=>{
    let newList = [...listTodo];
    newList.splice(key,1);
    setListTodo([...newList]);
  }

  return (
    <div className="main-container">
      <div className='center-container'>
      <TodoInput addList = {addList}/>
      <h1 className='app-heading'>TODO</h1>
      <hr/>
      {listTodo.map((listItem,i)=>{
        return(
          <Todolist key = {i} index = {i} item = {listItem} deleteListItem = {deleteListItem}/>
        )
      })}
      
      </div>
      
    </div>
  );
}

export default App;
