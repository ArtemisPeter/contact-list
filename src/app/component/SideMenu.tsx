import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import style from '../page.module.css'
import MainContent from './MainContent'

const SideMenu = () => {
  return (
    <> 
      <div className={style.sidenav}>
        <div className={style.a}>
        <a href="#">MENU</a>
        <a href="#" className={style.active}>My Contacts</a>
        <a href="#">Shared Contacts</a>
        <a href="#">Friends</a>
        </div>
        
      </div>

      <div className={style.main}>
        <MainContent />
      </div>
  
    </>
  )
}

export default SideMenu