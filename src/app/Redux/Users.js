import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchUsers } from './actions';


const Users = () => {

const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())

    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Users
