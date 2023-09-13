import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import style from '../page.module.css'
import {BsPersonCircle} from 'react-icons/bs'

const Login = () => {
  return (
    <>
        <div className='container d-flex justify-content-center mt-5'>
            <div className='rounded-top'>
                <div className={style.head}>
                    <i>Login</i>
                </div>
                <div className='text-center'>
                    <BsPersonCircle size="50px" color="white" className = {style.icon}/>
                </div>
                <form className='p-4 form-group' style={{backgroundColor: "lightgray"}}>
                    <input type='text' name = "username" placeholder='User Name' className='form-control mt-3'/>
                    <input type="password" name = "password" placeholder='Password' className='form-control mt-3' />
                    <div className='d-grid gap'>
                        <button type='submit' className='btn mt-4' style={{color: "grey", fontSize: "1.2rem"}}> Login</button>
                    </div>

                </form>
            </div>
        </div>
    </>
  )
}

export default Login