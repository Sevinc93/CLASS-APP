import React from 'react'
import user from '../images/sevo.jpeg';

function Right() {
    return (
        <div className='rightBlock'>
            <div className='div-btn'><button>Download CV</button></div>
            <div className='div-img'><img src={user} alt='user' width={250} /></div>

        </div>
    )
}

export default Right