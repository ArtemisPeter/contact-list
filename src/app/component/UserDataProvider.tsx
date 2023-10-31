import React, {useState} from 'react'
import UserDataContext from '../context/UserDataContext'

const UserDataProvider = ({ children }) => {
    const [User, SetUser] = useState({});

    function getTheUserData(userData){
        SetUser((prevState) => userData);
       
    }
    console.log(User);

  return (
    <UserDataContext.Provider value = {{User, getTheUserData}}>{children}</UserDataContext.Provider>
  )
}

export default UserDataProvider