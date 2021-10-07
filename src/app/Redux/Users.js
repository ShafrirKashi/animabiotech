import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from './actions';


const Users = () => {

const dispatch = useDispatch()
const users = useSelector((state) => state)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])


    return (
        <div>
            
        </div>
    )
}

export default Users
