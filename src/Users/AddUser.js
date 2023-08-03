import { Button } from 'bootstrap'
import React from 'react'

export default function AddUser () {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='mb-3'></h2>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-lable'>
                        Name
                    </label>
                    <input 
                        type={"text"} 
                        className='form-control'
                        placeholder='Enter Your Name'
                        name='name'
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
                    />
                </div>              
                <button type="submit" className="btn btn-outline-primary">
                    Submit</button>  

                    <button type="submit" className="btn btn-outline-danger mx-2" to="/Home">
                    Cancle</button>  

            </div>
        </div>
    </div>
  )
}
