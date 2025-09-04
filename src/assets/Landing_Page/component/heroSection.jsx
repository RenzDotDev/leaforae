import React from 'react'
import { Link } from 'react-router-dom';

import '../style/heroSection.css'

function HeroSection() {
  return (
    <section className='hero-section-con'>
        {/* Text and Actions Container */}
        <section className="text-and-action-con">
          {/* Text Container */}
          <div className="text-con">
            <p>Bring Home the <span style={{color: "#3A5A40"}}>Green</span></p>
            <p>Fresh plants, happy spaces, and a touch of nature for every home.</p>
        
            {/* Button Container */}
            <div className="button-con">
              <Link to={"/Product"} className="btn shop-now-btn">
                <p>Shop now</p>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <Link to={"/Blog"} className="btn explore-now-btn">
                <p>Read blogs</p>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>


          {/* Action Container */}
          <div className="action-con">
            <Link to={"/Product"} className='plant-health-btn'>
              <img src="plant-image6.png" alt="" />
              <p className='plant-healt-txt'>Plants for Health</p>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link to={"/Product"} className='plant-interior-btn'>
              <img src="plant-image5.png" alt="" />
              <p className='plant-healt-txt'>Plants for Interior</p>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </section>

        {/* Image Container */}
        <section className='image-con'>
          <img src="plant-image1.png" alt="" />
        </section>
    </section>
  )
}

export default HeroSection