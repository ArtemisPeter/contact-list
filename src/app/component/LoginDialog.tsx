
import React, { FormEvent, useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import style from '../page.module.css'
import {BsPersonCircle} from 'react-icons/bs'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import UserDataContext from '../context/UserDataContext'

const LogInDialog = ({OnhandleLogInSuccess}) => {
  
  const {User, getTheUserData} = useContext(UserDataContext);

    const {isLoading, isError, mutate, reset} = useMutation ({
        mutationFn: async (data) => {
          try {
            const response = await axios.post('https://hi-clist-be.vercel.app/api/user/login', data);
            if (response.status === 200) {
              getTheUserData(response.data);
              return response.data;
            } else {
              throw new Error('Login failed');
            }
          } catch (error) {
            return error;
          }
        },
        onSuccess: () => {
            OnhandleLogInSuccess();
        },
      });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const emailInput = form.querySelector('[name="username"]') as HTMLInputElement;
        const passwordInput = form.querySelector('[name="password"]') as HTMLInputElement;

        const LogInCredentials = {
            email: emailInput.value,
            password:passwordInput.value,
        }
        mutate(LogInCredentials); //this will trigger the useMutation.
    }

  return (
    <>
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
        </section>
    </>
  )
}

export default LogInDialog