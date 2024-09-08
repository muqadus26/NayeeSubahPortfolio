import React from 'react'

const Buttons = ({btnTitle, btnIcon}) => {
    return (
        <div className='herosection-name-container-button'>
            <button>
                {btnTitle}
                <span>{btnIcon}</span>
            </button>
        </div>  
    )
}

export default Buttons