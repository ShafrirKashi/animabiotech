import React, { useState, useEffect } from 'react'
import './UserList.sass'
import User from '../User/User'
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../../app/Redux/actions';


function UserList (){

    const dispatch = useDispatch()    
    const users = useSelector(state => state)
    const [pageNumber, setpageNumber] = useState(0)
    const usersPerPage = 9
    const pagesVisited = pageNumber * usersPerPage
    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) =>{
      return (
        <div key={user.id}>
          <Link to={`/users${user.id}`}>
            <User
              avatar={<img src={user.avatar} alt="" width="50" height="50" style={{borderRadius: '0.5rem'}}></img>}
              full_name={user.full_name}
              email={user.email}> 
            </User>
          </Link>
         </div>
      )
    })
    
    const changePage = ({selected}) => {
       setpageNumber(selected)
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    
    return (
        <div className="Main">
           {displayUsers}
           <ReactPaginate 
           previousLabel={"Previous"}
           nextLabel={"Next"}
           pageCount={7}
           onPageChange={changePage}
           containerClassName={"paginationBttns"}
           previousLinkClassName={"previousBttn"}
           nextLinkClassName={"nextBttn"}
           activeClassName={"paginationActive"}
             />

        </div>
    )
}

export default UserList
