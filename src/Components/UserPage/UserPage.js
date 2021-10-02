import React, { useState, useEffect } from 'react'
import './UserPage.css'
// import Single from '../Single/Single'
// import {Link} from 'react-router-dom'

function UserPage({match}) {
   useEffect(() => {
      fetchItem();

}, [])


    const [user, setUser] = useState({});


    // const displayUsers = users.slice(5,6).map((user) =>{
    //     return (
    //     <Single
    //     avatar={<img src={user.avatar} alt="" width="50" height="50" style={{borderRadius: '0.5rem'}}></img>}
    //     full_name={user.full_name}
    //     email={user.email}
    //     // occupation={user.occupation}
    //     > 
    //    </Single>
    //   )
    // })


//   useEffect(() => {
//       async function getData() {
//       let response = await fetch(`http://localhost:8000/${match.params.id}`)
//      const user = await getData.json();
//       setUser(user)

//         } 
//         getData()

// }, [])

const fetchItem = async () => {
    const fetchItem = await fetch(`http://localhost:8000/users/${match.params.id}`);
    const user = await fetchItem.json();
    setUser(user)
    console.log(user)

};



    return (
   
        <div>
            <div className="box">
                <h1>{user.id}</h1>
                <h1>asd</h1>
            </div>
        </div>
     
    )
}

export default UserPage
