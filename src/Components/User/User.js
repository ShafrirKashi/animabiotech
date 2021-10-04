import React from 'react'
import './User.sass'



function User(props) {

    return (
        <div>
            
            <div className="userbox">
            <div className="avatar">{props.avatar}</div>
            <div className="fullName">{props.full_name}</div>
            <div className="email">{props.email}</div>
            <div className="email">{props.occupation}</div>

            </div>
            
        </div>
    )
}
export default User
