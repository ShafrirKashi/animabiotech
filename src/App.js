import React, { useEffect } from 'react'
import './App.css';
import UserList from './Components/UserList/UserList'

function App() {


useEffect(() =>{

fetch('http://localhost:8000/users')
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data);
  })
});

  return (
    <div className="App">
       <UserList />

    </div>
  );
}

export default App;
