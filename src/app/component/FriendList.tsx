import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import UserDataContext from '../context/UserDataContext'
import {BsPersonCircle} from 'react-icons/bs'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import style from '../page.module.css'

const FriendList = () => {
    const {User, getTheUserData} = useContext(UserDataContext);
    const [myContact, SetMyContact] = useState([]);
    const [selectedContact, setSelectedContact] = useState([]);

    const [showInfo, setshowInfo] = useState(false);

    const AccessToken = User.accessToken;

    const showContactInfo = (contact) => {
        setSelectedContact(contact);
        setshowInfo((prevState) => !prevState);
    }

  const getContact = useQuery({
    queryKey:['getUser'],
    queryFn: async ()=> {
        try{
            const myContact = await axios.get('https://hi-clist-be.vercel.app/api/contact/all', {
                headers: {
                    Authorization:`Bearer ${AccessToken}`
                }
            }).then((response)=>{
                SetMyContact(response.data.data);
            })
        } catch(error){
            console.log(error);
        }
    }   
  });
  return (
    <>
        <div className='container'>
            <div className='row p-1'>
                <div className='col-bg-12 mt-1'>
                    <div className='d-grid gap-2 '>
                    {myContact.map((contact)=>(
                            <>
                                <button type='button' className='btn bg-secondary mt-2 mb-2' onClick={()=> showContactInfo(contact)} style={{display: 'flex', alignItems: 'center', color: 'white'}}>
                                    <BsPersonCircle size="30px" color="white" /><span style={{marginLeft: '8px'}}>{contact.name}</span>
                                </button> 
                            </>
                        ))}
                    </div>
                </div>
            </div>
            {showInfo && <div className='container mt-3'>
                <div className={style.imageHolder} style={{float: 'right'}}>
                    <div className='d-flex flex-column text-center'style={{marginTop: '25%'}}>
                        <div className='p-2' ><BsPersonCircle size="50px" color="white" /></div>
                        <div className='p-2'>{selectedContact.name}</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10'>
                        Name: {selectedContact.name}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10'>
                        Email: {selectedContact.email}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10'>
                        Phone: {selectedContact.phone}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10'>
                        Address: {selectedContact.address}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10'>
                        About info: 
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10'>
                        {selectedContact.aboutInfo}
                    </div>
                </div>
            </div>}
        </div>
    </>
  )
}

export default FriendList