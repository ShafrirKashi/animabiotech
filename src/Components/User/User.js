import React from 'react'
import './User.css'



function User(props) {

    // const uri = "https://i.pravatar.cc/150?u=" + Math.floor(Math.random() * 10000);
    // const img = <img src={uri} alt="" width="50" height="50" style={{borderRadius: '0.5rem'}}></img>

    return (
        <div>
            
            <div className="userbox">
            <div className="avatar">{props.avatar}</div>
            <div className="fullName">{props.full_name}</div>
            <div className="email">{props.email}</div>
            </div>
            
        </div>
    )
}
export default User
