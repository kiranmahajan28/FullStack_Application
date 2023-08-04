import axios from 'axios'
import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser () {

    let navigate=useNavigate()

    const [user,SetUser]= useState(

        {
            name:"",
            username:"",
            email:"",
        }
    )

        const{name,username,email}=user

        const onInputeChange=(e)=>{
            SetUser({...user,[e.target.name]:e.target.value})
        }

        const onSubmit= async (e)=>{
            e.preventDefault();
            await axios.post("http://localhost:8080/user",user)
            navigate("/")
        };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='mb-3'>Add User</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-lable'>
                            Name
                        </label>
                        <input 
                            type={"text"} 
                            className='form-control'
                            placeholder='Enter Your Name'
                            name='name'
                            value={name}
                            onChange={(e)=>onInputeChange(e)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='username' className='form-lable'>
                            UserName
                        </label>
                        <input 
                            type={"text"} 
                            className='form-control'
                            placeholder='Enter Your UserName'
                            name='username'
                            value={username}
                            onChange={(e)=>onInputeChange(e)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-lable'>
                            E-mail
                        </label>
                        <input 
                            type={"text"} 
                            className='form-control'
                            placeholder='Enter Your Email-Address'
                            name='email'
                            value={email}
                            onChange={(e)=>onInputeChange(e)}
                        />
                    </div>              
                    <button type="submit" className="btn btn-outline-primary">
                        Submit</button>  

                        <Link className="btn btn-outline-danger mx-2" to="/">
                        Cancle</Link>  
                </form>
            </div>
        </div>
    </div>
  )
}
