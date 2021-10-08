import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../../app/Redux/actions';

import './UserPage.sass'

const UserPage = ({match}) => {
const dispatch = useDispatch()    
const matchId = match.params.id;
const users = useSelector(state => state[matchId])

useEffect(() => {
    dispatch(fetchUsers())
}, [dispatch])

console.log(users)
  
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
