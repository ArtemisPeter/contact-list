
import React, { FormEvent, useState } from 'react'
import UserDashboard from './UserDashBoard'
import LogInDialog from './LoginDialog'

const Login = ( ) => {

  const [loginSuccess, setloginSuccess] = useState(false);

  const handleLogInSuccess = ()=> {
    setloginSuccess((prevState) => true);
  }
  
  return (
    <> 
       {loginSuccess ? <UserDashboard /> : <LogInDialog OnhandleLogInSuccess={handleLogInSuccess}/>}
    </>
  )
}

export default Login