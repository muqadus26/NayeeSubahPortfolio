import React from 'react'
import './herosection.css'
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { GiHand } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";






const HeroSection = () => {

  const heroSectionIconData = [
    {
      icon: <IoLogoInstagram />,
      link: 'https://instagram.com'
    },
    {
      icon: <CiLinkedin />,
      link: 'https://linkedin.com'
    },
    {
      icon: <FaTwitter />,
      link: 'https://twitter.com'
    }
  ]





  return (
    <div className='herosection-main-container'>

      <div className='herosection-icon-container'>
        {heroSectionIconData.map((muzammil, index) => {
          return (
            <a href={muzammil.link}>{muzammil.icon}</a>
          )
        })}
      </div>

      <div className='herosection-name-container'>
        <div className='herosection-name-container-top'>
          <h1>Hassan Ali.</h1>
          <span><GiHand /></span>

          <h2>Frontend Developer</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est sequi, deleniti optio exercitationem, magni repellat totam rerum perspiciatis porro et tempora autem repudiandae iusto? Suscipit nesciunt illum consectetur quibusdam?</p>
        </div>

        <div className='herosection-name-container-button'>
          <button>Say Hello</button>
          <span><FaTelegramPlane /></span>
        </div>
      </div>

      <div className='herosection-image-container'></div>

    </div>
  )
}

export default HeroSection