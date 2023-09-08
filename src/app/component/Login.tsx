"use client"
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import style from '../page.module.css'
import {BsPersonCircle} from 'react-icons/bs'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [credentials, setCredentials] = useState([]);
    const [success, setSuccess] = useState(false);
    const [errmsg, seterrmsg] = useState("");
   
    const handleSubmit = async(event) =>{
        event.preventDefault();
        const email = event.target.elements[0].value;
        const password = event.target.elements[1].value;

        setEmail(email);
        setPassword(password)
        
        const credentials = {
            email,
            password
        }
        
        axios.post('https://hi-clist-be.vercel.app/api/user/login', credentials).then((response)=>{
            setSuccess(true)
        }).catch((error)=>{
            seterrmsg((prevState)=> (prevState = `${error}`))
        })
    }

  return (
    <>
    {success ? (
        <h1>Logged in</h1>
    ) : ( <section>
        <div className='container d-flex justify-content-center mt-5'>
            <div className='rounded-top'>
                <div className={style.head}>
                    <i>Login</i>
                </div>
                <div className='text-center'>
                    <BsPersonCircle size="50px" color="white" className = {style.icon}/>
                </div>
                <form className='p-4 form-group' style={{backgroundColor: "lightgray"}} onSubmit={handleSubmit}>
                    <div className="text-center" style={{color: "red"}}>{errmsg}</div>
                    <input type='text' name = "username" placeholder='User Name' className='form-control mt-3'/>
                    <input type="password" name = "password" placeholder='Password' className='form-control mt-3' />
                    <div className='d-grid gap'>
                        <button type='submit' className='btn mt-4' style={{color: "grey", fontSize: "1.2rem"}}> Login</button>
                    </div>
                </form>
            </div>
        </div>
        </section>)
       }
    </>
  )
}

export default Login