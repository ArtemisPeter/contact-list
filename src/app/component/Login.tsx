
import React, { FormEvent, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import style from '../page.module.css'
import {BsPersonCircle} from 'react-icons/bs'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import LoggedIn from './LoggedIn'

const Login = () => {



    const {isSuccess, isLoading, isError, mutate, reset} = useMutation ({
        mutationFn: (data) => 
            axios.post('https://hi-clist-be.vercel.app/api/user/login', data)
            .then(response => response.data),
            onSuccess: () => {
                console.log('success');
                
            },
            
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const emailInput = form.querySelector('[name="username"]') as HTMLInputElement;
        const passwordInput = form.querySelector('[name="password"]') as HTMLInputElement;

        const LogInCredentials = {
            email: emailInput.value,
            password:passwordInput.value,
        }
        mutate(LogInCredentials);
    }

  
  return (
    <>
     {isSuccess ? <LoggedIn /> :
     <section>
        <div className='container d-flex justify-content-center mt-5'>
            <div className='rounded-top'>
                <div className={style.head}>
                    <i>Login</i>
                </div>
                <div className='text-center'>
                    <BsPersonCircle size="50px" color="white" className = {style.icon}/>
                </div>
                <form className='p-4 form-group' style={{backgroundColor: "lightgray"}} onSubmit={handleSubmit}>
                    <div className="text-center" style={{color: "red"}} onClick={reset}>{isError ? 'Failed': ''}</div>
                    <input type='text' name = "username" placeholder='User Name' className='form-control mt-3'/>
                    <input type="password" name = "password" placeholder='Password' className='form-control mt-3' />
                    <div className='d-grid gap'>
                        <button type='submit' className='btn mt-4' style={{color: "grey", fontSize: "1.2rem"}} disabled={isLoading}> {isLoading ? 'Logging in...' : 'Log In'}</button>
                    </div>
                </form>
            </div>
        </div>
        </section>}
    </>
  )
}

export default Login