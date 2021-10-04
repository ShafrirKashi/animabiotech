import React, { useState, useEffect } from 'react'
import './UserPage.sass'



function UserPage({match}) {
    useEffect(() => {
        async function getData() {
        let matchId = match.params.id;
        let response = await fetch("http://localhost:8000/users")
        response = await response.json()
        setUsers(response[matchId -1])
          } 
          getData()
  },[match])

  const [users, setUsers] = useState({});

    return (
   
        <div>
            <div className="box">
                <h1>{`Full Name: ${users.full_name}`}</h1>
                <h1>{`Email: ${users.email}`}</h1>
                <h1>{`Occupation: ${users.occupation}`}</h1>
            </div>
        </div>
     
    )
}

export default UserPage
