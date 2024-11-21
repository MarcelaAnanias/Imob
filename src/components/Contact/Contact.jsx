import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact Us</span>
                <span className='primaryText'>Easy to contact us</span>
                <p className='secondaryText'>We always ready to help by providijng the best services for you. <br/>
                We beleive a good blace to live can make your life better</p>

                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        
                        {/* Primeiro */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>11 9 9999-9999</span>
                                </div>
                            </div>
                            <button className="flexCenter button">
                                Call Now
                            </button>
                        </div>

                        {/* Segundo */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>Contact Us</span>
                                </div>
                            </div>
                            <button className="flexCenter button">
                                Call Now
                            </button>
                        </div>
                    </div>
                    <div className="flexStart row">
                        {/* Terceiro */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill  size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>Video Call Help</span>
                                </div>
                            </div>
                            <button className="flexCenter button">
                                Call Now
                            </button>
                        </div>

                        {/* Quarta */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>Send your message</span>
                                </div>
                            </div>
                            <button className="flexCenter button">
                                Call Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="flexCenter c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact