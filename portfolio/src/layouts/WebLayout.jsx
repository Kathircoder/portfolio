import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../assets/components/Navbar'

export const WebLayout = () => {
  return (
    <>
        < Navbar />
        < Outlet />
    </>
  )
}

export default WebLayout