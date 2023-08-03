import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Home() {

    const [users,Setusers]=useState([])
    
    useEffect(()=>{
        loadUesers();

    },[]);

    const loadUesers=async()=>{
         const result=await axios.get("http://localhost:8080/users");
         Setusers(result.data);
    }


  return(
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow ">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">UserName</th>
                <th scope="col">Email ID</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>
            
                <tr>
                <th scope="row" key={index}>
                    {index+1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                
                <button className="btn btn-primary max-2">View</button>
                <button className="btn btn-outline-primary max-2">Edit</button>
                <button className="btn btn-danger max-2">Delete</button>

                </tr>
                )}
            </tbody>
            </table>
        </div>
    </div>

  )
}
