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
          </div>

          {/* Button Container */}
          <div className="button-con">
            <button className="shop-now-btn">
              <p>Shop now</p>
              <i className="fa-solid fa-arrow-right"></i>
            </button>

            <button className="explore-now-btn">
              <p>Explore now</p>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          {/* Action Container */}
          <div className="action-con">
            <Link to={"/Product"}>Product</Link>
            <Link to={"/Product"}>Product</Link>
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