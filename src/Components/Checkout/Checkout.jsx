import React, { useState } from 'react'
import "../Checkout/Checkout.css"
import Navbar from '../Pages/Navbar'
import logo2  from "../Pages/img/logo.svg";
import  bannermed from "../Pages/img/banner-media.png";
import  banner from "../Pages/img/banner-media3.png";
import  pic8 from "../Pages/img/pic8.jpg";
import  pic3 from "../Pages/img/pic3.jpg"
import footer_imge  from "../Pages/img/footer-img.png";
import { InputText } from "primereact/inputtext";
import data from './dataSelectedCheckout';
import { Link } from 'react-router-dom';
import datato from './dataSelectedCheckoutTow';
import loggo from "../Pages/img/payment.jpg"
function Checkout() {



const [selected,setSelectd]=useState(null);

function handelSelection (getid){
    setSelectd(getid === selected ? null :getid )

}

const [Selected2, SetSelected2] = useState(null)

function handelSelection2(getid2){
    SetSelected2(getid2 === Selected2 ? null : getid2 )
}



const[valuee , setvaluee]=useState();

const handleInputChange = (e) => {
    setvaluee(e.target.valuee);
}

const handleDropdownClick = (value) => {
    setvaluee(value);
  };

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
{/**start section 1 right and left */}



<div className='section_1cARDrIGHTANDlEFT  container-fluid'>
<div className='section_1 '>

<div className="row">
    {/** start  section_1 right */}
    <div className="col-md-8 right">
   <h1>Billing details</h1>
  
  <div className='card1'>
    
  {data && data.length > 0 ? (
  data.map(dataItem => (
    <div className='item' key={dataItem.id}>
      <div className='title' onClick={() => handelSelection(dataItem.id)}>
        <h3>{dataItem.question}</h3>
        <span>+</span>
      </div>
      {selected === dataItem.id ? (
        <div><p>{dataItem.answer}</p></div>
      ) : null}
    </div>
  ))
) : (
  <div>No data found</div>
)}



  </div>


{/** */}
  <div className='Card_2'>

<div className='input'>

    <div className="row ml-2 d-flex justify-content-between">
        
        <div className="col-md-5 ">
        <div className="input_1">
        <h6>First Name</h6>
    <InputText className='inp'  keyfilter="int"  />
    </div>
        </div>

        <div className="col-md-5 ">
        <div className="input_2">
        <h6>Last Name</h6>
    <InputText className='inp' keyfilter="int"  />
    </div> 
        </div>
        <div className='col-md-1'></div>
    </div>


 
</div>
  
  </div>


  <div className='card_3'>
<h2>Company name (optional) </h2>
<InputText className='inf'  keyfilter="int"  />
  </div>


  <div className='card_3'>
<h2>Country / Region *</h2>
<InputText className='inf'  keyfilter="int"   placeholder='India'/>
  </div>

  <div className='card_3'>
<h2>Street address * </h2>
<InputText className='inf'  keyfilter="int"   placeholder='House numper and street name'/>
<InputText className='inf mt-2'  keyfilter="int"   placeholder='Apartment, suite, unit, etc  (optional'/>
  </div>

  
  <div className='card_3 mt-1'>
<h2>Town / City *</h2>

<div class="input-group ">
<input
          className='inf form-control'
          keyfilter="int"
          aria-label="Text input with dropdown button"
          placeholder="Kota"
          value={valuee}
          onChange={handleInputChange}
        />
  <div class="input-group-append">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false"></button>
    <div class="dropdown-menu">
      <Link class="dropdown-item"  onClick={() => handleDropdownClick('jaipur')} >jaipur</ Link>
      <Link class="dropdown-item" href="#"  onClick={() => handleDropdownClick('Udaipur')}>Udaipur</Link>
      <Link class="dropdown-item" href="#"  onClick={() => handleDropdownClick ('Another option')}>Another option</Link>
    </div>
  </div>
</div>
  </div>

  
  <div className='card_3 mt-1'>
<h2>State *</h2>
<InputText className='inf'  keyfilter="int"   placeholder='Rajasthan'/>
  </div>

  
  <div className='card_3 mt-1'>
<h2>ZIP Code *</h2>
<InputText className='inf'  keyfilter="int"  />
  </div>

  
  <div className='card_3 mt-1'>
<h2>Phone *</h2>
<InputText className='inf'  keyfilter="int" />
  </div>

  
  <div className='card_3'>
<h2>Email address *</h2>
<InputText className='inf'  keyfilter="int"   placeholder='Enter email'/>
  </div>

  <div className="Crad_4">
<p> Create an account?</p>
<p> Ship to a different address?</p>

  </div>

  <div className='Crad_5'>
    <h1>Order notes (optional)</h1>
<textarea placeholder='Notes about Your order, e g, special notes for delivery'></textarea>
  </div>



    </div>

    
  

    {/** end  section_1 right */}
    {/**----------------------------*/}




    {/**section_1 left */}
    <div className="col-md-4 Left_left">
<h1>Your Order</h1>

<div className='card_right'>

<div className='card_info_img'>
<img src={pic3} alt="logo"/>
<h5>Sophisticated <br/>Swagger Suit</h5>
<p>$40.00</p>
</div>
<div className='card_info_img'>
<img src={pic8} alt="logo"/>
<h5>Sophisticated <br/>Swagger Suit</h5>
<p>$40.00</p>
</div>
<div className='card_inf'>
<h1>Subtotal</h1>
<p>$100</p>
</div>

{/**card_inf__2 */}
<div className="card_inf_2">
    <h3>Shipping</h3>
    <p> Free shipping<br/> Flat Rate:  <br/> <span>$25.00</span></p>
  
</div>
{/**card_inf__2 */}


{/**card_inf__3 */}
<div className='card_inf_3'>
<p>Total</p>
<h3>$125.75</h3>
</div>
{/**card_inf__3 */}

{/**card_inf__4 */}
<div className='card_inf_4'>
      {datato && datato.length > 0 ? (
        datato.map(itemto => (
          <div className='item2' key={itemto.id}>
            <div className='title'  onClick={() => handelSelection2(itemto.id)}>
              <h1>{itemto.question}</h1>
            </div>
            {Selected2 === itemto.id && (
              <div>
                <p>{itemto.answer}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No data found</div>
      )}
    </div>

  {/**card_inf__4 */}


 {/**card_inf__5 */}

<div className='card_inf_5'>
    <h1>
Paypal
</h1>
<span><img src={loggo} alt="" /></span> 
<p><Link to="/">What is PayPal?</Link></p>
</div>
 {/**card_inf__5 */}
 

 {/**card_inf__6*/}
 
<div className='card_inf_6'>
    <p>Your personal data will be used to process your order,
         support your experience throughout this website,
          and for other purposes described in our
          <span> <a href="#">privacy policy.</a></span></p>
          <h6>I have read and agree to the website terms and conditions</h6>
</div>
 {/**card_inf__6 */}

  {/**card_inf__7_BTN */}
 <div className='card_inf_5_BTN'>
<Link to="/Checkout" className='Btn'>Place Order</Link>
</div>
 {/**card_inf__7_BTN */}
 

</div>




    </div>

    {/**end  section_1 left */}
</div>
</div>
</div>


{/**start section 1 right and left */}
    {/**---------------------------------------------------------------------*/}



















    {/**---------------------------------------------------------------------*/}
      <hr/>
{/**start  Footer */}
<div className="Foooter_Section ">

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

    </>
  
  )
}

export default Checkout
