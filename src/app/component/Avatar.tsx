import React, { useContext, useState } from 'react'
import style from '../page.module.css'
import {BsPersonCircle} from 'react-icons/bs'
import UserDataContext from '../context/UserDataContext'

const Avatar = () => {

  const {User, getTheUserData} = useContext(UserDataContext);

    return (
        <div className='container'>
          <div className='row'>
            <div className='col-10'>
              <h3 style={{ color: 'white' }}>{User.user.fullName}</h3>
            </div>
            <div className='col-2 text-start'>
              <BsPersonCircle size="40px" color="white" />
            </div>
          </div>
        </div>
      );      
}

export default Avatar