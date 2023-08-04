import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function Home() {

    const [users,Setusers]=useState([])
    
    const {id}=useParams()

    useEffect(()=>{
        loadUesers();

    },[]);

    const loadUesers=async()=>{
         const result=await axios.get("http://localhost:8080/users");
         Setusers(result.data);
    }

    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUesers();
    }

  return(
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow ">
            <thead>
                <tr>
                <th scope="col">S.N</th>
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
                
                <Link className="btn btn-primary max-2" to={`viewuser/${user.id}`}>View</Link>
                <Link className="btn btn-outline-primary max-2" to={`edituser/${user.id}`}>Edit</Link>
                <button className="btn btn-danger max-2" 
                    onClick={()=> deleteUser(user.id)}>Delete</button>

                </tr>
                )}
            </tbody>
            </table>
        </div>
    </div>

  )
}
