import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="padding innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact Us</span>
                <span className='primaryText'>Easy to contact us</span>
                <p className='secondaryText'>We always ready to help by providijng the best services for you. <br/>
                We beleive a good blace to live can make your life better</p>
            </div>
            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact