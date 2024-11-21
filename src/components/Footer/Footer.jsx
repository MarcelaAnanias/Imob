import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className="paddings innerWidth flexCenter f-conteiner">
            <div className='flexColStart f-left'>
                <img src="./logo2.png" width={150}/>

                <span className='secondaryText'>
                    Our vision is to make every place <br />
                    feel like the best home for everyone.
                </span>
            </div>
            <div className='flexColStart f-right'>
                <span className='primaryText'>Information</span>
                <span className='secondaryText'> 145 New York, FL 5467, USA </span>

                <div className='flexCenter f-menu'>
                    <span>Property</span>
                    <span>Product</span>
                    <span>Service</span>
                    <span>About</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer