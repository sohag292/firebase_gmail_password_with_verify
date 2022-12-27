import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <h4 className='text-center m-4'>My Email password Authetication</h4>
        <Outlet></Outlet>
    </div>
  )
}
