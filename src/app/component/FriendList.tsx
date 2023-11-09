import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import UserDataContext from '../context/UserDataContext'
import {BsPersonCircle} from 'react-icons/bs'
import { useQuery } from '@tanstack/react-query'

const FriendList = () => {
    const {User, getTheUserData} = useContext(UserDataContext);

    const GetMyContact = useQuery({

    });

  return (
    <>
        <div className='row p-1'>
            <div className='col-bg-12 mt-1'>
                <div className='container-fluid list-group bg-secondary p-2'>
                    <div className="row">
                        <div className='col-1'>
                            <BsPersonCircle size="30px" color="white" />
                        </div>
                        <div className='col-11'>
                            {User.user.friends.map((friendsName, index) => (
                            <li key ={index} className='list-group-item bg-secondary' style={{outline:"none" }}>
                                {friendsName}
                            </li>
                             ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FriendList