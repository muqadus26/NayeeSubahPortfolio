import React from 'react'
import './about.css'
import { FiFile } from 'react-icons/fi'
import aboutSectionImage from '../../websitedesignimages/heropicture.jpg'
import { BiBadge, BiHeadphone } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'

const About = () => {

  const experienceData = [
    {
      icon: <BiBadge />,
      title: "Experience",
      time: "8 +Year"
    },
    {
      icon: <BsBag />,
      title: "Completed",
      time: "48 +Project"
    },
    {
      icon: <BiHeadphone />,
      title: "Support",
      time: "Online 24/7"
    },
  ]
  return (
    <div className='about-section' id='about'>


      <div className='about-section-top'>
        <h1>About Me</h1>
        <span>My introduction</span>
      </div>



      <div className='about-section-bottom'>

        <div className='about-section-bottom-left'>
          <img src={aboutSectionImage} alt='' />
        </div>


        <div className='about-section-bottom-right'>


          <div className='testing'>
            {experienceData.map((items, index) => {
              return (
                <div className='about-section-bottom-right-top' key={index}>


                  <span>{items.icon}</span>
                  <h3>{items.title}</h3>
                  <h4>{items.time}</h4>


                </div>
              )
            })}
          </div>

          <p className='about-section-bottom-right-middle'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sunt at quis a sit minus ut atque, architecto eius! Accusamus ratione esse dolore, suscipit dolorem deserunt rerum sed nesciunt culpa.
          </p>

          <button className='about-section-bottom-right-bottom'>Download CV <FiFile /></button>
        </div>

      </div>


    </div>
  )
}

export default About
