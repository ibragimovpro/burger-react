import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <img src="/img/Logo.png" alt="" />
   

    <div className="navbar-navbar">


    <Link to={"/About"} className='link-nav1'>
    Почему у наc
    </Link>
    <Link to={"/"} className='link-nav'>
    Меню бургеров
    </Link>
    <Link to={"/Order"} className='link-nav'>
    Оформление
    </Link>
    </div>
    <div className="dollor">
        $
    </div>
    </div>
  
    </>
  )
}

export default Navbar