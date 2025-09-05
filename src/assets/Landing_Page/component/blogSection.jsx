import React from 'react'
import { Link } from 'react-router-dom';

import "../style/blogSection.css"

function BlogSection() {
  return (
    <div className='blog-section-con'>
      {/* Blog section 1 */}
      <section className="blog blog-con1">
        <div className="blog-img">
          <img src="plant-image2.png" alt="" />
        </div>
        
        <div className="blog-text-con">
          <p className="blog-title">Nurture Your greens with <span style={{color: "#3A5A40"}}>ease</span></p>
          <p className='blog-text'>Caring for plants doesn't have to be complicated. With the right tips, you can help your greens thrive and bring life to your space.</p>
          <Link to={"/Product"} className='blog-btn'>
            <p>Learn More</p>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

      </section>

      {/* Blog section 2 */}
      <section className="blog blog-con2">
        <div className="blog-text-con">
          <p className="blog-title">Fresh beginnings, <span style={{color: "#3A5A40"}}>young shoots</span></p>
          <p className='blog-text'>Caring for plants doesn’t have to be complicated. With the right tips, you can help your greens thrive and bring life to your space.</p>
          <Link to={"/Blog"} className='blog-btn'>
            <p>Learn More</p>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        
        <div className="blog-img">
          <img src="plant-image3.png" alt="" />
        </div>
        

      </section>
    </div>
  )
}

export default BlogSection