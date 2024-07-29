import React from 'react';
import "./UserAcount.css"
import Navbar from '../Pages/Navbar';
import  pic8 from "../Pages/img/pic8.jpg"
import  bannermed from "../Pages/img/banner-media.png"
import  banner from "../Pages/img/banner-media3.png"
import logo2  from "../Pages/img/logo.svg"
import footer_imge  from "../Pages/img/footer-img.png";
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import  bacground  from "../Pages/img/bacgroundlogin.png"


import { useState } from "react"
import { Link } from 'react-router-dom';
function UserAcount(){
const[state,setState]=useState({
    email:null,
    Password:null,
})

const handelChange = (e)=>{

setState({...state,[e.target.name]:e.target.value})
}



    return(
        <>
<Navbar/>

        <div className=" SectionUserAcount">
<div className="row">


    <div className="col-md-6 left ">
        <h1>MY ACCOUNT</h1>
        <Link to="/" className='home'>Home > My Account </Link>
        <img src={bacground} alt="bacground" />
    </div>

    
    <div className="col-md-6 right">
    <div className="surface-card p-5 shadow-2 border-round w-full lg:w-6 Acount">
        <div className="text-center mb-5">
           
            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
            <span className="text-600 font-medium line-height-3">Don't have an account?</span>
            <Link className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</Link>
        </div>

        <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email"
             type="text"
              placeholder="Email address"
               className="w-full mb-3" 
               onChange={handelChange}
                 name="email"
               />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText 
            id="password"
             type="password"
              placeholder="Password"
               className="w-full mb-3" 
               onChange={handelChange}
               name="Password"
               />

            <div className="flex align-items-center justify-content-between mb-6">
              
                <Link className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</Link>
            </div>

            <Button  label="Sign In" icon="pi pi-user" className="w-full" />
        </div>
    </div>
    </div>
</div>


</div>





    {/**====================================================================*/}

{/**start  Footer */}
<hr />
<div className="Foooter_Section ">

<div className="Footer_content">
<div className="row ">

<div className="col-md-3">
    <div className="logo_svg">
    <img src={logo2} alt="logo" />
    </div>
    <div className="foter_text">
        <ul>
            <li>Address : 451 Wall Street, UK, London</li>
            <li>E-mail : example@info.com</li>
            <li>Phone : (064) 332-1233</li>
            <br/>
            <li>Subscribe To Our Newsletter</li>
        </ul>
        <input type="email" placeholder="Enter Your Email"  />
     
      
    </div>
</div>


{/**
 * 

 */}
<div className="col-md-3">
<h3>Recent Posts</h3>
<div className="info_card">
    <div>
        <img src={bannermed} alt="baner_meda_photo" />
        </div>
    <div>
        <p> 
        Cozy Knit Cardigan <br/> Sweater<br/>
      <span>  July 23, 2023</span>
        </p>
    </div>
</div>

<div className="info_card">
    <div>
        <img src={banner} alt="baner_meda_photo" />
        </div>
    <div>
        <p> 
        Cozy Knit Cardigan <br/> Sweater<br/>
      <span>  July 23, 2023</span>
        </p>
    </div>
</div>

<div className="info_card">
    <div>
        <img src={pic8} alt="baner_meda_photo" />
        </div>
    <div>
        <p> 
        Cozy Knit Cardigan <br/> Sweater<br/>
      <span>  July 23, 2023</span>
        </p>
    </div>
</div>
</div>


<div className="col-md-2 footer_2 fooot">
    <h2>Our Stores</h2>
    <ul>
        <li>New York</li>
        <li>London SF</li>
        <li>Edinburgh</li>
        <li>Los Angeles</li>
        <li>Chicago</li>
        <li>Las Ve</li>
    </ul>
</div>

<div className="col-md-2 footer_2">
<h2> Useful Links</h2>
    <ul>
        <li>Privacy Policy</li>
        <li>Returns</li>
        <li>Terms & Conditions</li>
        <li>Contact Us</li>
        <li>Latest News</li>
        <li>Our Sitemap</li>
    </ul>
</div>

<div className="col-md-2 footer_2">

<h2> Footer Menu</h2>
    <ul>
        <li>Instagram Profile</li>
        <li>New Collection</li>
        <li>Terms & Conditions</li>
        <li>Woman Dress</li>
        <li>Contact Us</li>
        <li>Latest News</li>
    </ul>

</div>


</div>


</div>


<hr className="hr_footer"/>

<div className="footer_end">
    
<div className="row">
<div className="col-md-6 right">
    <p>© 2024 <span> DexignZone</span> Theme. All Rights Reserved.</p>
</div>

<div className="col-md-6 left">
    <div className="imge_footerend">
  <span> We Accept :</span>   <img src={footer_imge} alt="footer_imge" />
    </div>
</div>
</div>
</div>

</div>
{/**End Footer */}
{/**====================================================================*/}

        </>
    )
}

export default UserAcount;













