import React from 'react'
// import './about.css'
import { FiFile } from 'react-icons/fi'
import aboutSectionImage from '../../websitedesignimages/heropicture.jpg'
import { BiBadge, BiHeadphone } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import Buttons from '../Buttons'

const Skills = () => {

    const skillsData = [
        {
            mainTitle: "Frontend Developer",
            skillSetLeft: [
                {
                    language: "HTML",
                    experience: "Basic"
                },
                {
                    language: "CSS",
                    experience: "Advanced"
                },
                {
                    language: "JavaSript",
                    experience: "Basic"
                },
            ],
            skillSetRight: [
                {
                    language: "Bootstarap",
                    experience: "Basic"
                },
                {
                    language: "React",
                    experience: "Advanced"
                },
                {
                    language: "Redux",
                    experience: "Basic"
                },
            ]

        },
        {
            mainTitle: "Backend Developer",
            skillSetLeft: [
                {
                    language: "HTML",
                    experience: "Basic"
                },
                {
                    language: "CSS",
                    experience: "Advanced"
                },
                {
                    language: "JavaSript",
                    experience: "Basic"
                },
            ],
            skillSetRight: [
                {
                    language: "HTML",
                    experience: "Basic"
                },
                {
                    language: "CSS",
                    experience: "Advanced"
                },
                {
                    language: "JavaSript",
                    experience: "Basic"
                },
            ]

        }
    ]

    return (
        <div className='about-section' id='about'>


            <div className='about-section-top'>
                <h1>Skills</h1>
                <span>My technical level</span>
            </div>



            <div className='skills-section-bottom'>

            </div>


        </div>
    )
}

export default Skills