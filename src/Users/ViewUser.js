import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const [user ,SetUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const {id} =useParams();

    useEffect (()=>{
        loadUesers();
    },[] )

    const loadUesers = async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        SetUser(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='mb-3'> User Details</h2>
                <div className='Card'>
                    <div className='Card-header'>
                        Details of User id:{user.id}
                        <ul className='list-group list-group-flush' >
                            <li className='list-group-item'>
                                <b>Name:- </b>
                                {user.name}  
                            </li>
                            <li className='list-group-item'>
                                <b>User_Name:- </b>
                                {user.username}
                            </li>
                            <li className='list-group-item'>
                                <b>E-mail:- </b>
                                {user.email}
                            </li>
                        </ul>
                    </div>
                </div>

                <Link className='btn btn-primary my-2' to={"/"}>
                    Back To Home
                </Link>    
            </div>
        </div>
    </div>
  )
}
