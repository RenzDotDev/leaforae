import React from 'react'
import { Link } from 'react-router-dom'

import "../style/communitySection.css"

function CommunitySection() {
  return (
    <div className='community-section-con'>
      <HeaderText />
      <CommunityShowcase />
    </div>
  )
}

export default CommunitySection

// ===== INNER COMPONENTS =====

// Header Text
function HeaderText() {
  return (
    <h1 className='header-text'>Join our plant lover <br /> <span style={{color: "#3A5A40"}}>community</span></h1>
  )
}

// Community Showcase
function CommunityShowcase() {
  return(
    <>
      <section className="community-showcase-con">
        <section className="community-details">
          <p className='community-text1'>Over <span style={{color: "#3A5A40"}}>80k+</span> People Joined Us!</p>
          <p className='community-text2'>Be part of our growing plant-loving community!</p>
          <section className="icon-con">
            <Link to={"https://www.facebook.com/"} className='icon'><i className="fa-brands fa-facebook-f"></i></Link>
            <Link to={"https://www.instagram.com/"} className='icon'><i className="fa-brands fa-square-instagram"></i></Link>
            <Link to={"https://www.twitter.com/"} className='icon'><i className="fa-brands fa-x-twitter"></i></Link>
          </section>
        </section>

        <section className="image-con">
          <img src="/plant-image4.png" alt="" />
        </section>

      </section>
    </>
  )
}