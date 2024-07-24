import React from 'react'
import logo from "../Pages/img/logo.svg"
import { Link } from 'react-router-dom'
import "../Pages/Navbar.css"
import home_1 from  "../Pages/img/img_3/Home_1.png"
import   home_2 from  "../Pages/img/img_3/Home-2.png"
import  home_3 from   "../Pages/img/img_3/Home_3.png"

function Navbar() {
  return (
    <>
    {/**start section navbar */}

<div className='nav_bar_section'>


<nav class="navbar navbar-expand-lg navbar-light  ">
  <Link class="navbar-brand logo_logo" to="/" ><img src={logo} alt="logo" /></Link>
  <button class="navbar-toggler  " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav  nav_nav">

    <li class="nav-item dropdown  active">
<Link class="nav-link dropdown-toggle bot_b "  to="/"  role="button" data-toggle="dropdown" aria-expanded="false">
 Home <i class="fa-duotone fa-solid fa-star"></i>
</Link>
<div class="dropdown-menu menu_meun_2">
  <div className='maenu_photo'>
  <Link  to='/' class="dropdown-item doop " ><img src={home_1} alt="" /></Link>
  <Link to='/homepage1' class="dropdown-item" ><img src={home_2} alt="" /></Link>
  <Link to='/homepage3' class="dropdown-item" ><img src={home_3} alt="" /></Link>
  </div>
</div>
</li>
 
      <li class="nav-item active">
        <Link class="nav-link" to='/ShopPage'>Shop <i class="fa-duotone fa-solid fa-star"></i></Link>
      </li>

      <li class="nav-item active">
        <Link class="nav-link" to="/">Blog <i class="fa-duotone fa-solid fa-star"></i></Link>
      </li>

    <li class="nav-item dropdown  active">
<Link class="nav-link dropdown-toggle bot_b "  to="/"  role="button" data-toggle="dropdown" aria-expanded="false">
  All Ctegories <i class="fa-duotone fa-solid fa-star"></i>
</Link>
<div class="dropdown-menu menu_meun">
  <Link  to='/' class="dropdown-item doop" >Photography</Link>
  <Link to='/' class="dropdown-item" >Arts</Link>
  <Link  to='/'class="dropdown-item" >Adventure</Link>
  <Link  to='/'class="dropdown-item" >Action</Link>
  <Link to='/' class="dropdown-item" >Games</Link>
  <Link to='/' class="dropdown-item" >Movies</Link>
  <Link to='/' class="dropdown-item" >Comics</Link>
  <Link to='/' class="dropdown-item" >Biographies</Link>
  <Link to='/' class="dropdown-item" >Children’s Books</Link>
  <Link to='/' class="dropdown-item" >Historical</Link>
  <Link to='/' class="dropdown-item" >Contemporary</Link>
  <Link to='/' class="dropdown-item" >c</Link>
  <Link to='/' class="dropdown-item" >Education</Link>
  <div class="dropdown-divider"></div>
</div>
</li>
<li class="nav-item active">
        <Link class="nav-link" to="/">Portfolio <i class="fa-duotone fa-solid fa-star"></i></Link>
      </li>

      <li class="nav-item active">
        <Link class="nav-link " to="/</li>">Pages <i class="fa-duotone fa-solid fa-star"></i></Link>
      </li>
      
      <li class="nav-item active">
        <Link class="nav-link ">My Account <span>NEW</span> <i class="fa-duotone fa-solid fa-star"></i></Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <div className='icon_icon '>
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-regular fa-heart"></i>
      <i class="fa fa-cart-shopping"></i>
      </div>
 
    </form>
  </div>

</nav>
</div>

 {/**----------------------end section navbar-------------------------------------------------- */}

    </>
  )
}
export default Navbar;
