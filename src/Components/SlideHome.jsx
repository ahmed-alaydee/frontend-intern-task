import React from 'react'
import SimpleSlider from "./Slider"
import "../Components/HomePagee.css"
function SlideHome() {
  return (
    <section className="home">
      <div className='homeSlide contentWidth'>
      <div className="container ">
    <SimpleSlider/>
    </div>
      </div>
   
  </section>
  )
}

export default SlideHome
