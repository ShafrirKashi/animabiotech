import React, { useState, useEffect } from 'react'
import './UserList.css'
import axios from 'axios'
import User from '../User/User'


function UserList (props){

    const [users, setUsers] = useState([])

  useEffect(() => {
      axios.get("http://localhost:8000/users").then((response) => {
            setUsers(response.data);})}, [])



    return (
        <div className="Main">
           <User
           full_name={users[0].full_name}
           email={users[0].email}
           ></User>
           <User
           full_name={users[1].full_name}
           email={users[1].email}
           ></User>
           <User
           full_name={users[2].full_name}
           email={users[2].email}
           ></User>
           <User
           full_name={users[3].full_name}
           email={users[3].email}
           ></User>
           <User
           full_name={users[4].full_name}
           email={users[4].email}
           ></User> 
           <User
           full_name={users[5].full_name}
           email={users[5].email}
           ></User> 
           <User
           full_name={users[6].full_name}
           email={users[6].email}
           ></User> 
           <User
           full_name={users[7].full_name}
           email={users[7].email}
           ></User> 
           <User
           full_name={users[8].full_name}
           email={users[8].email}
           ></User> 
           <User
           full_name={users[9].full_name}
           email={users[9].email}
           ></User> 
      
                       

           
            
        </div>
    )
}

export default UserList
