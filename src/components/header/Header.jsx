import React from 'react'
import './Header.css'

const Header = () => {

    const headerData = [
        {
            name: "Home",
            link: "#home"
        },
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Slills",
            link: "#skills"
        }
    ]

    return (
        <div>
            <h1>Hassan.</h1>

            <div>
                {headerData.map((item, index) => {
                    return (
                        <a href={item.link} className="" key={index}>{item.name}</a>
                    )
                })}
            </div>



        </div>
    )
}

export default Header;