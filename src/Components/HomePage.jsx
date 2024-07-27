import "../Components/HomePage.css"
import { Link } from 'react-router-dom'
import  pro_1 from "../Components/Pages/img/pic1.png"
import  pro_2 from "../Components/Pages/img/pic2.png"
import  banner from "../Components/Pages/img/banner-media3.png"
import  pic8 from "../Components/Pages/img/pic8.jpg"
import  pic5 from "../Components/Pages/img/5.png"
import  pic6 from "../Components/Pages/img/6.png"
import  pic7 from "../Components/Pages/img/7.png"
import  pic9 from "../Components/Pages/img/8.png"
import  bannermed from "../Components/Pages/img/banner-media.png"
import  product3 from "../Components/Pages/img/pic3.jpg"
import  ge2 from "../Components/Pages/img/2 (1).png"

import  logo_1 from "../Components/Pages/img/img-2/logo1.png"
import  logo_2 from "../Components/Pages/img/img-2/logo2.png"
import  logo_3 from "../Components/Pages/img/img-2/logo3.png"
import  logo_4 from "../Components/Pages/img/img-2/logo4.png"
import  comp_1 from "../Components/Pages/img/img-2/comp_1.jpg"
import  comp_2 from "../Components/Pages/img/img-2/comp_2.jpg"
import  comp_3 from "../Components/Pages/img/img-2/comp_3.jpg"

import  LatestPos_1 from "../Components/Pages/img/img_4/LatestPos_1.jpg"
import  LatestPos_2 from "../Components/Pages/img/img_4/LatestPos_2.jpg"
import  LatestPos_3 from "../Components/Pages/img/img_4/LatestPos_3.jpg"
import logo2  from "../Components/Pages/img/logo.svg";

import lady_1  from "../Components/Pages/img/img_popup-view/lady-1.png";
import lady_2  from "../Components/Pages/img/img_popup-view/lady-2.png";
import lady_3  from "../Components/Pages/img/img_popup-view/lady-3.png";

import footer_imge  from "../Components/Pages/img/footer-img.png"
import SlideHome from "./SlideHome"
import { useState } from "react"





function HomePage(){


{/**start handel Plus and mines in Quantity */}
    const [number,setnumper] = useState(0)

 const handelPlus = (e) =>{
 
    setnumper(e => e + 1);
    }


const handelMines = (e) => {
    setnumper(e =>  Math.max(e - 1 ,0 ));
}

{/** end handel Plus and mines in Quantity */}



{/**starthandelonchangeimg */}

const [image , setimage]=useState()

const onchangeimg = (newimg) =>{
    setimage(newimg)

}
{/**start  handelonchangeimg*/}


{/**start   hiddinpopupView*/}
const [popupVisible, setPopupVisible] = useState(true);
const  hiddinpopupView = ()=>{
    setPopupVisible(false)
}
{/**end   hiddinpopupView*/}


{/**start  Showpopupview*/}
const Showpopupview = ()=>{
    setPopupVisible(true)
}

{/**end  Showpopupview*/}


    
return(
   
<>
{/**start section homePage*/}
<div className=" section_home_head ">
    <div className="row section_1">

        <dev className="col-md-7 col-sm-6">
    
            <h1>Make your fashion look <br/> mire  <span>charming</span></h1>
            < p>Sell globally in minutes with localized currencies, languages, 
            and  experiences in every market.  </p>
            
            <div className="button_btn">
            <Link className="btn  btn-outline-dark Ptn btn_btn">ADD TO CART</Link>
              <Link className="btn btn-outline-dark  Ptn">VIEW DETILS</Link>
            </div>


            <div className="product_card">
                {/**Card_1 */}
              <div className="product_card_1">
                 <div className="pro_img">
                  <img src={pro_1} alt="product_img_1" />
                  <i class="fa-solid fa-plus"></i>
                 </div>
                 <div className="tx_content">
                    <h1>Collar Casual <br/> Shirt</h1>
                    <h6> $18 <del>27</del></h6>
                 </div>
              </div>

                 {/**Card_2 */}
                 <div className="product_card_2">
                 <div className="pro_img">
                  <img src={pro_2} alt="product_img_1" />
                  <i class="fa-solid fa-plus"></i>
                 </div>
                 <div className="tx_content">
                    <h1>Collar Casual <br/> Shirt</h1>
                    <h6> $18 <del>27</del></h6>
                 </div>
              </div>
            </div>




        </dev>

        <dev className="col-md-5 c Card_img_im ">
            <div className="Card_img">
            <img src={banner} alt="banner" />
            </div>
       
        </dev>
    </div>
</div>

{/**End section homePage*/}

{/**====================================================================*/}
{/**Start section 2 slider*/}


<div className="Seaction_2 ">

<div className="row mt-5">

{/**slider-left */}
<div className="col-md-4 Card_banner">
<img src={pic8} alt="banner" />
</div>

<div className="col-md-1"></div>


{/**slider-Right */}
<div className="col-md-7 slider_right">
    <h3>Discover latest collection</h3>
    <SlideHome/>
</div>
</div>
</div>


{/**end section 2 slider*/}
{/**====================================================================*/}

{/**Start section3 Cards*/}

<div className="Section_Cards  ">
<div className="HeaderText row">
        {/**Text-Header-Cards */}
        <div className="col-md-5">
    <h2 className="left-content">Most popular products</h2>
    </div>

        <div className="col-md-7">
            {/**Text-Header-Cards_nav */}
   <div className="List">
   <div>
    <ul className="ul_ul">
        <li data-class='all' className=" active">All</li>
        <li  data-class='Dresses'>Dresses</li>
        <li  data-class='Tops'>Tops</li>
        <li  data-class='Outerwear'>Outerwear</li>
        <li  data-class='Jacket'>Jacket</li>
    </ul>
</div>
   </div>
        </div>


   
  
</div>

{/**Start section card in section cards*/}

<div className="Cards_Card">
    <div className="row shufel_images">

        <div className="col-md-3">
            <img className="Dresses" src={ge2} alt="" />

            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger " onClick={Showpopupview}>QUICK VIEW </Link>
        </div>
                </div>
            </div>
             <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <span>$80</span>
             </div>
        </div>

        <div className="col-md-3 ">
            <img className="Dresses" src={pic8} alt="" />
            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger " onClick={Showpopupview}>QUICK VIEW </Link>
        </div>
                </div>
            </div>
            <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <span>$80</span>
             </div>
             </div>

        <div className="col-md-3">
            <img className="Tops" src={banner} alt="" />
            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger " onClick={Showpopupview}>QUICK VIEW </Link>
        </div>
                </div>
            </div>
            <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <span>$80</span>
             </div>
        </div>

        <div className="col-md-3">
            <img className="Tops" src={pic5} alt="" />
            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger " onClick={Showpopupview}>QUICK VIEW </Link>
        </div>
                </div>
            </div>
            <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <span>$80</span>
             </div>
        </div>

        <div className="col-md-3">
            <img className="Outerwear" src={pic6} alt="Outerwear" />
            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger "onClick={Showpopupview}>QUICK VIEW </Link>
        </div>
                </div>
            </div>
            <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <span>$80</span>
             </div>
        </div>

        <div className="col-md-3">
            <img className="Outerwear" src={pic7} alt="" />
            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger " onClick={Showpopupview}>QUICK VIEW </Link>
        </div>
                </div>
            </div>
            <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <span>$80</span>
             </div>
        </div>

        <div className="col-md-3">
            <img className="Jacket" src={pic9} alt="" />
            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger " onClick={Showpopupview}>QUICK VIEW </Link>
        </div>
                </div>
            </div>
            <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <span>$80</span>
             </div>
        </div>

        <div className="col-md-3">
            <img className="Jacket" src={bannermed} alt="" />
            <div className="info">
                <div className="caption">
                <h6>GET 20% OFF</h6>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <div className="buttonn">
        <Link to="/" className="btn btn-outline-danger " onClick={Showpopupview}>QUICK VIEW </Link>
        </div>
                </div>
            </div>
            <div className="footer_content">
             <h3>Cozy Knit Cardigan <br/> Sweater</h3>
             <span>$80</span>
             </div>
        </div>
    </div>


{/**Start Popup-view in section cards*/}

{popupVisible && (
        <div className="popup-View container text-center">
          <div className="popup-Card">
            <a className="close"><i className="fas fa-times close-btn" onClick={hiddinpopupView}></i></a>
            <div className="row">
              <div className="popup-card_img col-md-6">
                <div className="img_back">
                  <img className="top" src={image} alt="" />
                </div>
                <div className="img_Click">
                  <img onClick={() => onchangeimg(lady_1)} src={lady_1} alt="" />
                  <br />
                  <img onClick={() => onchangeimg(lady_2)} src={lady_2} alt="" />
                  <br />
                  <img onClick={() => onchangeimg(lady_3)} src={lady_3} alt="" />
                </div>
              </div>

              <div className="info_popup col-md-6">
                <h6>SALE 20% OFF</h6>
                <h1>Cozy Knit Cardigan Sweater</h1>
                <span>
                  <i className="fa-solid fa-star chldren"></i>
                  <i className="fa-solid fa-star chldren"></i>
                  <i className="fa-solid fa-star chldren"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <span className="inf"> 4.7 Rating (5 customer reviews)</span>
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vero ea maxime delectus minima!</p>

                <div className="info_price_quantity">
                  <div className="price">
                    <h3>Price</h3>
                    <span>$125.75 <del>$132.17</del></span>
                  </div>

                  <div className="Quantity">
                    <h3>Quantity</h3>
                    <div className="info_Qun">
                      <button className="btn buuttt" onClick={handelMines}><i className="fa-solid fa-minus"></i></button>
                      <h1>{number}</h1>
                      <button className="btn buuttt" onClick={handelPlus}><i className="fa-solid fa-plus"></i></button>
                    </div>
                  </div>
                </div>
                <fiv className="button d-flex justify-content-center mt-3 ml-2">
                    <Link className="btn btn-outline-dark buutonn mr-2" to="/shopcart">Add to cart</Link>
                    <Link  className="btn btn-outline-dark buutonn">Add to Wishlist</Link>
                </fiv>
                <hr />
                <div className="footer_Quantity">
                  <h4><span>SKU: </span> PRT584E63A</h4>
                  <h4><span>Category: </span> Dresses, Jeans, Swimwear, Summer, Clothing</h4>
                  <h4><span>Tags: </span> Casual Athletic, Workwear, Accessories</h4>
                </div>
             <div className="footer_icon">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-youtube"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


{/**End Popup-view in section cards*/}

</div>
{/**End section card in section cards*/}

</div>
{/**end section3 Cardsr*/}
{/**====================================================================*/}

{/**start section4 Background*/}

<div className="Section_Background">

<div className="row">
<div className="col back_1">
    <div className="backkk">
    <p>Sale Up to 50% Off</p>
<h2>SUMMER <br/> <span>2023</span></h2>
<Link className="btn btn-outline-dark butto">SHOP NOW</Link>
</div>
</div>

<div className="col back_2">
    <div className="Teaxt">
    <p>Sale Up to 50% Off</p>
<h1>NEW SUMMERE <br/>COLLection</h1>
<Link className="btn btn-outline-dark butto">SHOP NOW</Link>
    </div>

</div>
</div>
</div>

{/**end section4 Background*/}

{/**====================================================================*/}

{/* start  section5 Photo*/}

<div className="section_Checked">

<div className="row">

    <div className="col-md-4 img_img">
<img src={product3} alt="product3" />
    </div>


    <div className="col-md-7">
<div className="text_contet">
<h1>Users Who Viewed This<br/> Also Checked Out These <br/>   Similar Profiles</h1>
    </div>        
<div className="row container_img">

    <div className="col-sm-6">
        <div >
        <img  src={pic7} alt="" />
        <div className="text_img">
        <p>up to 79% off<br/><span >Cozy Knit Cardigan<br/> Sweater</span></p>
        <h6>$80 <br/> <del>%95</del></h6>
        </div>
        </div>   
    </div>

    <div className="col-sm-6">
    <img src={pic8} alt="" />
    <div className="text_img">
        <p>up to 79% off<br/><span >Cozy Knit Cardigan<br/> Sweater</span></p>
        <h6>$80 <br/> <del>%95</del></h6>
        </div>
</div>

<div className="col-sm-6">
<img src={pic9} alt="" />
<div className="text_img">
        <p>up to 79% off<br/><span >Cozy Knit Cardigan<br/> Sweater</span></p>
        <h6>$80 <br/> <del>%95</del></h6>
        </div>
</div>
<div className="col-sm-6">
<img src={pic5} alt="" />
<div className="text_img">
        <p>up to 79% off<br/><span >Cozy Knit Cardigan<br/> Sweater</span></p>
        <h6>$80 <br/> <del>%95</del></h6>
        </div>
</div>
</div>

    </div>
</div>



</div>



{/**end section5 Photo*/}

{/**====================================================================*/}

{/**start  section6 Photoback*/}

<div className="Section_6 container">
<h1>Featured offer for you</h1>

<duv className="row">
 <div className="col-md-6 photo_1">
    <div className=" photo_text">
    <p>20 % OFF</p>
    <h2> LUXURU <br/>Bras</h2>
<Link className="btn btn-outline-dark BUUTO_BTN">Collect Now</Link>
    </div>
    </div>
    <div className="col-md-1">

    </div>

    <div className="col-md-5 photo_2">
        <div className="photo_text_2">
        <p>Sale Up to 50% Off</p>
<h1> SUMMERE <br/><span>2024</span></h1>
<Link className="btn btn-outline-dark butto">SHOP NOW</Link>
        </div>

        </div>

</duv>

</div>

{/**End  section6 Photoback*/}
{/**====================================================================*/}


{/**start  section7 img*/}
<div className="section_7">
    <h1>Sponsored</h1>
    <div className="row container">
     <div className="col-md-3 ">
        <div className="dz_image">
        <img src={comp_1 } className="image_1" alt="company_image" />
        <img src={logo_1} className="image_2" alt="logo" />
        </div>
        <div className="background"></div>
 
     </div>

     <div className="col-md-3 ">
        <div className="dz_image">
        <img src={comp_2 } className="image_1" alt="company_image" />
        <img src={logo_2} className="image_2" alt="logo" />
        </div>
        <div className="background"></div>
        <div className="Instor_btn">
            <Link className="btn btn-outline-dark">instor</Link>
            </div>
 
     </div>

     <div className="col-md-3 ">
        <div className="dz_image">
        <img src={comp_3 } className="image_1" alt="company_image" />
        <img src={logo_3} className="image_2" alt="logo" />
        </div>
        <div className="background"></div>
 
     </div>

     <div className="col-md-3 ">
        <div className="dz_image">
        <img src={comp_1 } className="image_1" alt="company_image" />
        <img src={logo_4} className="image_2" alt="logo" />
        </div>
        <div className="background"></div>
        <div className="Instor_btn">
            <Link className="btn btn-outline-dark">instor</Link>
            </div>
 
 
     </div>
    </div>

</div>


{/**End  section7 img*/}
{/**====================================================================*/}



{/**START  section8 LatestPost img*/}

<div className="section_8_lastesr_post">
<h1 className="title_text">Latest Post</h1> 

    <div class="row">
    <div className="col-md-6">
    <p>Discover the most trending products in Pixio.</p>
    </div>

    <div className="col-md-6">
<div className="title_info">
    <Link className="btn btn-outline button_bt">View All</Link>
</div>
</div>
    </div>

    <div className=" container">

   <div className="row">
<div className="col-md-5">
<div className="image_img">
    <img src={LatestPos_2} alt="LatestPos_2" />
</div>
<div className="Z_index_info">
    <div className="inf">
    <h2> <span className="info_top">17 May 2023</span> <br/> Trendsetter Chronicles: Unveiling the Latest in Fashion</h2>
    <span>Read More <i class="fa-solid fa-chevron-right"></i></span>
    </div>

</div>
</div>


<div className="col-md-7 ">

<div className="image_and_info ">

<div className="im_g">
    <img src={LatestPos_1} alt="LatestPos_1" />
</div>
<div className="inffoo">
<h2>
<span className="par">17 May 2022</span>
<br/>
<br/>
Dress to Impress: Elevate Your Everyday Style
</h2>
<span>Read More <i class="fa-solid fa-chevron-right"></i></span>
</div>
    </div> 
 


    <div className="image_and_info ">

<div className="im_g">
    <img src={LatestPos_3} alt="LatestPos_3" />
</div>
<div className="inffoo">
<h2>
<span className="par">17 May 2022</span>
<br/>
<br/>
Dress to Impress: Elevate Your Everyday Style
</h2>
<span>Read More <i class="fa-solid fa-chevron-right"></i></span>
</div>
    </div> 
    <br />

</div>
   </div>

    </div>
</div>
{/**End  section8 Latest Post img*/}
{/**====================================================================*/}

<hr/>
{/**start  Footer */}

<div className="Foooter_Section">

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
export default HomePage;