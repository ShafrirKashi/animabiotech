import React from 'react'
import './App.css';
import UserList from './Components/UserList/UserList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {


  return (
    <Router>
      <div className="App">
     <Switch> 
        <Route path="/users">
          <UserList />
        </Route>
     </Switch> 
 
      </div>
    </Router>

  );
}

export default App;
