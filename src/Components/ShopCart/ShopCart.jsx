import React, { useState } from 'react'
import "../ShopCart/ShopCart.css"
import Navbar from '../Pages/Navbar'
import logo2  from "../Pages/img/logo.svg";
import  bannermed from "../Pages/img/banner-media.png";
import  banner from "../Pages/img/banner-media3.png";
import  pic8 from "../Pages/img/pic8.jpg";
import footer_imge  from "../Pages/img/footer-img.png";
import  LatestPos_1 from "../Pages/img/img_4/LatestPos_1.jpg"
import  LatestPos_2 from "../Pages/img/img_4/LatestPos_2.jpg"
import  LatestPos_3 from "../Pages/img/img_4/LatestPos_3.jpg"

import lady_1  from "../Pages/img/img_popup-view/lady-1.png";
import lady_3  from "../Pages/img/img_popup-view/lady-3.png";
import { InputText } from "primereact/inputtext";
import { Link } from 'react-router-dom';
import iconf from "../Pages/img/icond.png"
import  pic6 from "../Pages/img/6.png"

function ShopCart() {



    const [ countnumper, setcountnumper]=useState(0)

const Pluscount= (plus) =>{
    setcountnumper(plus => plus +1)
}


const minuscount= (minus) =>{
    setcountnumper(minus => Math.max( minus - 1 , 0))
}



  return (
<>
<div className=' container-fluid'>
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


    {/**---------------------------------------------------------------------*/}
{/**start  section2 center */}

<div className='section2_Center container-fluid '>


<div className='row'>

    {/**start section2 left */}
<div className="col-md-8 Section2_left text-center">
<div className="table">
    <thead>
        <tr>
            <th>Product</th>
            <th></th>
            <th></th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
        </tr>
    </thead>

    <div className='tbody'>

    <tbody>
        <tr>
            <td><img src={pic6} className='product_img' alt="bannermd" /></td>
            <td className='product-name'>Sophisticated Swagger Suit</td>
            <td className='product-price'>$40.00</td>
            <td>
                <div className='icon_plus_mines'>
                   <button onClick={ minuscount}> <i className="fa-solid fa-minus"></i></button>
                    <h2>{countnumper}</h2>
                    <button onClick={Pluscount}> <i class="fa-solid fa-plus"></i></button>
                </div>
            </td>
            <td className='product-pric2'>$160.00</td>
            <td className='icon'><i class="fa-solid fa-circle-xmark"></i></td>
         
        </tr>
        <tr>
            <td><img src={bannermed} className='product_img' alt="bannermd" /></td>
            <td className='product-name'>Sophisticated Swagger Suit</td>
            <td className='product-price'>$40.00</td>
            <td>
                <div className='icon_plus_mines'>
                   <button onClick={ minuscount}> <i className="fa-solid fa-minus"></i></button>
                    <h2>{countnumper}</h2>
                    <button onClick={Pluscount}> <i class="fa-solid fa-plus"></i></button>
                </div>
            </td>
            <td className='product-pric2'>$160.00</td>
            <td className='icon'><i class="fa-solid fa-circle-xmark"></i></td>
         
        </tr>
        

        <tr>
            <td><img src={LatestPos_1} className='product_img' alt="bannermd" /></td>
            <td className='product-name'>Sophisticated Swagger Suit</td>
            <td className='product-price'>$40.00</td>
            <td>
                <div className='icon_plus_mines'>
                   <button onClick={ minuscount}> <i className="fa-solid fa-minus"></i></button>
                    <h2>{countnumper}</h2>
                    <button onClick={Pluscount}> <i class="fa-solid fa-plus"></i></button>
                </div>
            </td>
            <td className='product-pric2'>$160.00</td>
            <td className='icon'><i class="fa-solid fa-circle-xmark"></i></td>
         
        </tr>
        

        <tr>
            <td><img src={LatestPos_2} className='product_img' alt="bannermd" /></td>
            <td className='product-name'>Sophisticated Swagger Suit</td>
            <td className='product-price'>$40.00</td>
            <td>
                <div className='icon_plus_mines'>
                   <button onClick={ minuscount}> <i className="fa-solid fa-minus"></i></button>
                    <h2>{countnumper}</h2>
                    <button onClick={Pluscount}> <i class="fa-solid fa-plus"></i></button>
                </div>
            </td>
            <td className='product-pric2'>$160.00</td>
            <td className='icon'><i class="fa-solid fa-circle-xmark"></i></td>
         
        </tr>
        

        <tr>
            <td><img src={LatestPos_3} className='product_img' alt="bannermd" /></td>
            <td className='product-name'>Sophisticated Swagger Suit</td>
            <td className='product-price'>$40.00</td>
            <td>
                <div className='icon_plus_mines'>
                   <button onClick={ minuscount}> <i className="fa-solid fa-minus"></i></button>
                    <h2>{countnumper}</h2>
                    <button onClick={Pluscount}> <i class="fa-solid fa-plus"></i></button>
                </div>
            </td>
            <td className='product-pric2'>$160.00</td>
            <td className='icon'><i class="fa-solid fa-circle-xmark"></i></td>
         
        </tr>
        

        <tr>
            <td><img src={lady_1} className='product_img' alt="bannermd" /></td>
            <td className='product-name'>Sophisticated Swagger Suit</td>
            <td className='product-price'>$40.00</td>
            <td>
                <div className='icon_plus_mines'>
                   <button onClick={ minuscount}> <i className="fa-solid fa-minus"></i></button>
                    <h2>{countnumper}</h2>
                    <button onClick={Pluscount}> <i class="fa-solid fa-plus"></i></button>
                </div>
            </td>
            <td className='product-pric2'>$160.00</td>
            <td className='icon'><i class="fa-solid fa-circle-xmark"></i></td>
         
        </tr>

        <tr>
            <td><img src={lady_3} className='product_img' alt="bannermd" /></td>
            <td className='product-name'>Sophisticated Swagger Suit</td>
            <td className='product-price'>$40.00</td>
            <td>
                <div className='icon_plus_mines'>
                   <button onClick={ minuscount}> <i className="fa-solid fa-minus"></i></button>
                    <h2>{countnumper}</h2>
                    <button onClick={Pluscount}> <i class="fa-solid fa-plus"></i></button>
                </div>
            </td>
            <td className='product-pric2'>$160.00</td>
            <td className='icon'><i class="fa-solid fa-circle-xmark"></i></td>
         
        </tr>
        
        
   

    </tbody>
    </div>

    <div className='footer_table'>
    <div className="card flex justify-content-center">
            <InputText  className="input" keyfilter="int" placeholder="Coupon Code" />
        <div className='text'>
            <h3>    Apply Coupon</h3>
        </div>
        </div>
        <Link className='btn btn-outline-dark '>Update Card</Link>

    </div>

</div>
</div>
{/**end section2 left */}



{/**start section2 right */}
<div className='col-md-4 Section2_right'>
<div className='card_right'>
<h2>
Cart Total</h2>

<div className="card_Card">
  <h2>Bank Offer 5% Cashback</h2>

  <div className="textsndicon2">
  <i class="fa-solid fa-ship"></i>
  <h3>FREE <br/> <span>Enjoy The Product</span></h3>
  </div>

  <div className='icoon'>
<img src={iconf} alt="" />
<h1>
Enjoy The Product</h1>
  </div>

  <p> <i class="fa-regular fa-circle-check"></i> You will save ₹504 on this order</p>

  <div className='Footer_card2'>
  <h5>Total:</h5>
  <span>$125.25</span>
  </div>

  <div className='footer_button'>
<Link className='btn  btn-outline-dark'>PLACE ORDER</Link>
  </div>

</div>
</div>


</div>
{/**start section2 right */}
</div>










</div>
{/**end  section2 center */}
    {/**---------------------------------------------------------------------*/}






    <hr/>
{/**start  Footer */}

<div className="Foooter_Section">

<div className="Footer_content">
<div className="row ">

<div className="col-md-3 col-sm-6">
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
<div className="col-md-3 col-sm-6">
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


<div className="col-md-2 col-sm-6 footer_2 fooot">
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

<div className="col-md-2 col-sm-6 footer_2">
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

<div className="col-md-2 col-sm-6 footer_2">

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




</div>
</>
  )
}

export default ShopCart
