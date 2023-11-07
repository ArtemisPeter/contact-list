import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import style from '../page.module.css'

const SideMenu = () => {
  return (
    <> 
      <div className={style.sidenav}>
        <div className={style.a}>
        <a href="#">MENU</a>
        <a href="#">My Contacts</a>
        <a href="#">Shared Contacts</a>
        <a href="#">Friends</a>
        </div>
        
      </div>

      <div className={style.main}>
        <h1>Main here</h1>
      </div>
  
    </>
  )
}

export default SideMenu