import React from 'react'
import './App.css';
import UserList from './Components/UserList/UserList'
import UserPage from './Components/UserPage/UserPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Users from './app/Redux/Users'


function App() {

  return (
    <Router>
      <div className="App">
     <Switch> 
        <Route path="/users" exact component={UserList} />
        <Route path="/users/:id" component={UserPage} />
     </Switch> 
     <Users />
      </div>
    </Router>

  );
}

export default App;
