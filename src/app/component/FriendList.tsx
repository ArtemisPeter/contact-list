import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import UserDataContext from '../context/UserDataContext'
import {BsPersonCircle} from 'react-icons/bs'

const FriendList = () => {
    const {User, getTheUserData} = useContext(UserDataContext);

  return (
    <>
        
        <div className='row p-1'>
            <div className='col-bg-12 mt-1'>
                <div className='container-fluid list-group bg-secondary p-2'>
                    <BsPersonCircle size="30px" color="white" />
                    {User.user.friends.map((friendsName, index) => {
                        <li key ={index} className='list-group-item'>
                            {friendsName}
                        </li>
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default FriendList