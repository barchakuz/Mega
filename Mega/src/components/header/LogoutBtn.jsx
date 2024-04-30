import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../../store/authSlice' 
import authService from '../../appwrite/config'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className=' inline-block px-6 oy-2 duration-200 hover:bg-blue-100 rounded-full'></button>
  )
}

export default LogoutBtn