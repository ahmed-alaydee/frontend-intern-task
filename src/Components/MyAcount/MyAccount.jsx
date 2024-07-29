
import React from 'react'
import Navbar from '../Pages/Navbar'
import  pic8 from "../Pages/img/pic8.jpg"
import  bannermed from "../Pages/img/banner-media.png"
import  banner from "../Pages/img/banner-media3.png"
import logo2  from "../Pages/img/logo.svg"
import footer_imge  from "../Pages/img/footer-img.png";
import "../MyAcount/MyAccount.css";
import  profilo from  "../Pages/img/profile4.jpg"
import { Link } from 'react-router-dom';
import Bccc1 from "../Pages/img/Baccc.png";
import Bccc2 from "../Pages/img/Bacc2.png";

function MyAccount() {
  return (
    <>
    <Navbar/>

    {/**---------------------------------------------------------------------*/}

 {/** Section_1 BakGround */}
 <div className='Section_11'>

<div className='Bacground'>
  <div className='content'>
  <h2>Shop Standard</h2>
  <p>My Account <span><i class="fa-solid fa-chevron-right"></i> </span> Standard</p>
  </div>

</div>
  </div>

  {/**End Section_1 BakGround */}
    {/**---------------------------------------------------------------------*/}


{/**Start setion2_right and left  */}

<div className='Sec_2 container-fluid'>
<div className="row">

    {/**start section card left */}
<div className="col-md-3 caard">
    <div className="topCard">
        <img src={profilo} alt="logo" />
        <h5>Ronald M. Spino <br /><span>info@example.com</span></h5>
    </div>
    <div className='secoundCrad'>
<ul>
    <li className=''>
    <Link to="/MyAccount" className='Linkbg '>DASHBOARD </Link>
    </li>

    <li>
    <Link to="/MyAccount" className='Link'>Dashboard </Link>
    </li>
    <li>
        
      <Link to="/MyAccount" className='Link'>Orders </Link>
    </li>
    <li>      <Link to="/MyAccount" className='Link'>Downloads </Link></li>
    <li>  <Link to="/MyAccount" className='Link'>Return request</Link></li>
    <li className=''> 
    <Link to="/MyAccount" className='Linkbg '>ACCOUNT SETTINGS</Link></li>
    <li>      <Link to="/MyAccount" className='Link'>Profile</Link></li>
    <li>
    <Link to="/MyAccount" className='Link'>Address </Link></li>
    <li>    <Link to="/MyAccount" className='Link'>Shipping methods</Link></li>
    <li> <Link to="/MyAccount" className='Link'>Payment Methods </Link></li>
    <li>   <Link to="/MyAccount" className='Link'>Review </Link></li>
</ul>


    </div>
</div>
    {/**end section card left */}



{/*strat Section Right */}
<div className="col-md-9 sectRight">
<div className="contanir_right">

    <div className="top_title">
    <h3>Hello <strong>John Doe</strong> (not <strong> John Doe?</strong>
    <span><Link className='link' to="/UserAcount">Log out</Link></span>) </h3>
    <p><Link className='btn' to="/profileAccount">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</Link></p>
    </div>

    <div className="towCard">
        <div className='row'>

        <div className=' col-md-4'>
            <div className='card_1'>
            <svg   width="40" height="40" viewBox="0 0 36 37" fill="none"
         xmlns="http://www.w3.org/2000/svg"><path d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z" fill="#FFBB38"></path><path d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z" fill="#FFBB38"></path><path d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z" fill="#FFBB38"></path></svg>
        <p>Total Order</p>
        <h2>3658</h2>
            </div>
    
        </div>

     
        <div className=' col-md-4'>
            <div className='card_1'>
            <svg   width="40" height="40" viewBox="0 0 36 37" fill="none"
         xmlns="http://www.w3.org/2000/svg"><path d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z" fill="#FFBB38"></path><path d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z" fill="#FFBB38"></path><path d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z" fill="#FFBB38"></path></svg>
        <p>Total Pending Order</p>
        <h2>215</h2>
            </div>
    
        </div>


        <div className=' col-md-4'>
            <div className='card_1'>
            <svg   width="40" height="40" viewBox="0 0 36 37" fill="none"
         xmlns="http://www.w3.org/2000/svg"><path d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z" fill="#FFBB38"></path><path d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z" fill="#FFBB38"></path><path d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z" fill="#FFBB38"></path></svg>
        <p>Total Wishlist</p>
        <h2>31576</h2>
            </div>
    
        </div>
        </div>

        <div className="center_Card">
        <img className='img_1' src={Bccc1} alt="...." />
        <img  className='img_2' src={Bccc2}alt="...." />
    </div>
  
    </div>
    
   
</div>
</div>


{/*End Section Right */}
</div>
</div>


{/**End setion2_right and left  */}








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

export default MyAccount