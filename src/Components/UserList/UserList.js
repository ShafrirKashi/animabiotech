import React, { useState, useEffect } from 'react'
import './UserList.css'
// import axios from 'axios'
import User from '../User/User'
import ReactPaginate from 'react-paginate'
 

function UserList (props){

    const [users, setUsers] = useState([])
    const [pageNumber, setpageNumber] = useState(0)
    const usersPerPage = 9
    const pagesVisited = pageNumber * usersPerPage
    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) =>{
        return (
        <User
        avatar={<img src={user.avatar} alt="" width="50" height="50" style={{borderRadius: '0.5rem'}}></img>}
        full_name={user.full_name}
        email={user.email}
        >
       </User>

      )
    })
    
    

    const changePage = ({selected}) => {
        setpageNumber(selected)
    }

  useEffect(() => {
      async function getData() {
      let response = await fetch("http://localhost:8000/users")
      response = await response.json()
      setUsers(response)
        } 
        getData()

}, [])

    return (
        <div className="Main">
           {displayUsers}
           <ReactPaginate 
           previousLabel={"Previous"}
           nextLabel={"Next"}
           pageCount={6}
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
