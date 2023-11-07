import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Avatar from './Avatar'

const TopNavbar = () => {
    return (
        <>
          <div className='container-fluid' style={{ display: 'flex', backgroundColor: '#778b90' }}>
            <div className='d-flex justify-content-between' style={{ width: '100%' }}>
              <div className='p-2'>
                <h3 style={{ color: 'white' }}>My Contact List v1.0 - Shared Contacts</h3>
              </div>
              <div className='p-2'>
                <Avatar />
              </div>
            </div>
          </div>
        </>
      );      
}

export default TopNavbar