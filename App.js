import React, { useState , useEffect } from 'react';
import {List, ListItem, ListItemText, Button, FormControl, Input, InputLabel, ListItemAvatar} from '@material-ui/core';
import './App.css';
import Todo from './Todo.js';
import './Todo.css';
import db from './firebase.js'
import firebase from 'firebase'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
  const addTodo = (event) => {
    //executed when button is clicked

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  }

  return (
    <div className="App">
      <h1> TODO WEBAPP! 🚀 </h1>
      <form>
      {/*<input value = {input} onChange = {event => setInput(event.target.value)}/>*/}
      
      <FormControl>
        <InputLabel> ✅ Write a ToDo... </InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      
      <Button disabled={!input} type="submit" onClick = {addTodo} variant="contained" color="primary">
        Add ToDo
      </Button>
      {/* <button type="submit" onClick = {addTodo}> Add Task </button> */}
      </form>
      <ul>
      {todos.map(todo => (

        <list className="todo__list">
          <ListItem>
          <ListItemAvatar>
          </ListItemAvatar>
           <ListItemText primary={todo} secondary="Dummy Deadline ⏰"/>
          </ListItem>
          <Button onClick={event => db.collection('todos').doc(prop.todo.id).delete()}> DELETE ME </Button>
          }
        </list>

      ))}
      </ul>
    </div>
  );
}

export default App;