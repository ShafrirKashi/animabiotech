import React, { useState, useEffect } from 'react'
import './UserList.css'
import axios from 'axios'

const UserList = () => {

    const [users, setUsers] = useState([])


  useEffect(() => {
      axios.get("http://localhost:8000/users").then((response) => {
            setUsers(response.data);
    })

}, [])





    return (
        <div className="Main">
            <p>{users[0].full_name}</p>
            <p>s</p>
            <ul className="Main__list">User List   
                <li>asd</li>
            </ul>
        </div>
    )
}

export default UserList
