
import "../ShopPage/ShopPage.css"
import Navbar from '../Pages/Navbar';
import  pic8 from "../Pages/img/pic8.jpg"
import  bannermed from "../Pages/img/banner-media.png"
import  banner from "../Pages/img/banner-media3.png"
import logo2  from "../Pages/img/logo.svg"
import footer_imge  from "../Pages/img/footer-img.png";
import React from 'react'; 
import { InputText } from "primereact/inputtext";
import  { useState } from "react";
import { Slider } from "primereact/slider";
import { Link } from "react-router-dom";
import  ge2 from "../Pages/img/2 (1).png"
import  pic9 from "../Pages/img/8.png"
import  pic5 from "../Pages/img/5.png"
import  pic6 from "../Pages/img/6.png"
import  pic7 from "../Pages/img/7.png"

function ShopPage() {
  const [value, setValue] = useState([20,80]);

  return (
    <>
 <Navbar/>
    {/**---------------------------------------------------------------------*/}

 {/** Section_1 BakGround */}
  <div className='Section_1'>

<div className='Bacground'>
  <div className='content'>
  <h2>Shop Standard</h2>
  <p>Home Shop <span><i class="fa-solid fa-chevron-right"></i> </span> Standard</p>
  </div>

</div>

  </div>
  {/**End Section_1 BakGround */}
    {/**---------------------------------------------------------------------*/}



  {/**Start  Section_2 Slider_left and cards_Righjt */}

<section className="Section_2">


<div className=" container-fluid">
  <div className="row">

 {/** start slider left*/}
  <div className="col-md-3 "> 

<div className="Slider_left">
  {/**top slider */}
<div className="top_slider_left">
  <svg class="me-2 svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20" height="20">
  <g id="Layer_28" data-name="Layer 28">
    <path d="M2.54,5H15v.5A1.5,1.5,0,0,0,16.5,7h2A1.5,1.5,0,0,0,20,5.5V5h2.33a.5.5,0,0,0,0-1H20V3.5A1.5,1.5,0,0,0,18.5,2h-2A1.5,1.5,0,0,0,15,3.5V4H2.54a.5.5,0,0,0,0,1ZM16,3.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z">
      </path><path d="M22.4,20H18v-.5A1.5,1.5,0,0,0,16.5,18h-2A1.5,1.5,0,0,0,13,19.5V20H2.55a.5.5,0,0,0,0,1H13v.5A1.5,1.5,0,0,0,14.5,23h2A1.5,1.5,0,0,0,18,21.5V21h4.4a.5.5,0,0,0,0-1ZM17,21.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Z">
        </path><path d="M8.5,15h2A1.5,1.5,0,0,0,12,13.5V13H22.45a.5.5,0,1,0,0-1H12v-.5A1.5,1.5,0,0,0,10.5,10h-2A1.5,1.5,0,0,0,7,11.5V12H2.6a.5.5,0,1,0,0,1H7v.5A1.5,1.5,0,0,0,8.5,15ZM8,11.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z">
          </path></g></svg>
          <p>Filter</p>
</div>

{/** secund input*/}
<div className="secund_input">
<InputText keyfilter="int" className="Input_in" placeholder="Search Product" />
</div>

{/** Third Price*/}
<div className="Price_left_slider">
<h1>Price</h1>
<div className="card flex justify-content-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" range />
            <div className="circle">
        </div>
        </div>
        <div className="maiandmaxprice">
        <span> Min Price: $40</span>
          <p> Max Price: $346 </p>
        </div>

       {/** 4 Color*/}
       <div className="color">
          <h1>Color</h1>
          <div className="Color_Circle">
           <div className="circle1"></div>
           <div className="circle2"></div>
           <div className="circle3"></div>
           <div className="circle4"></div>
           <div className="circle5"></div>
           <div className="circle6"></div>
           <div className="circle7"></div>
           <div className="circle8"></div>

          </div>
       </div>
     
        {/** 5 start Size*/}
        <div className="Size_left_slider">
          <h1>Size</h1>
          <div className="numper_color">
            <div className="numper1">1</div>
            <div className="numper1">2</div>
            <div className="numper1">3</div>
            <div className="numper1">4</div>
            <div className="numper1">5</div>
            <div className="numper1">6</div>
            <div className="numper1">7</div>
            <div className="numper1">8</div>
            <div className="numper1">9</div>
            <div className="numper1">10</div>
          </div>
        </div>
</div>
<hr />

</div>

</div>
 {/** end slider left*/}


{/**start right Card */}
<div className="col-80 col-xl-9 Section_Cards">
<div className="row  shufel_images Cards_Card">


<div className="col-md-4  Cards_Card2">
            <img className="Dresses" src={ge2} alt="" />

            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger ">QUICK VIEW </Link>
        </div>
                </div>
            </div>
             <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <p>$80</p>
             </div>
        </div>
        
<div className="col-md-4  Cards_Card2">
            <img className="Dresses" src={pic5} alt="" />

            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger ">QUICK VIEW </Link>
        </div>
                </div>
            </div>
             <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <p>$80</p>
             </div>
        </div>
        
<div className="col-md-4  Cards_Card2">
            <img className="Dresses" src={pic9} alt="" />

            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger ">QUICK VIEW </Link>
        </div>
                </div>
            </div>
             <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <p>$80</p>
             </div>
        </div>
        
<div className="col-md-4  Cards_Card2">
            <img className="Dresses" src={pic6} alt="" />

            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger ">QUICK VIEW </Link>
        </div>
                </div>
            </div>
             <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <p>$80</p>
             </div>
        </div>
        
<div className="col-md-4  Cards_Card2">
            <img className="Dresses" src={pic7} alt="" />

            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger ">QUICK VIEW </Link>
        </div>
                </div>
            </div>
             <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <p>$80</p>
             </div>
        </div>
        
<div className="col-md-4  Cards_Card2">
            <img className="Dresses" src={pic5} alt="" />

            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger ">QUICK VIEW </Link>
        </div>
                </div>
            </div>
             <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <p>$80</p>
             </div>
        </div>
        

    

 
        
</div>



</div>

{/**End right Card */}
  </div>

</div>
 
</section>





  {/**End  Section_2 Slider_left and cards_Righjt */}

  {/**---------------------------------------------------------------------*/}



 

 











{/**====================================================================*/}

{/**start  Footer */}

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

export default ShopPage;
