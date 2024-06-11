
/* eslint-disable no-unused-vars */
import React from 'react'
import '../App.css'
import Header from './Header'


function Left() {
    return (
        <React.Fragment>
            <div className='leftBlock'>
                <Header />
                <div className='my-infos'>
                    <div>
                        <p className='name'>Sevinc Insan</p>
                        <span className='title'>Front End Developer</span>
                    </div>
                    <div>
                        <p><span>Phone:</span>+90 548 876 56 51</p>
                        <p><span>Email:</span>sevinc@insan.com</p>
                        <p><span>Address:</span>10, Yildiz St, Iskele</p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Left