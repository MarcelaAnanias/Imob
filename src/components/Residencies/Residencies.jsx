import React from 'react'
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
  return (
    <section className='r-wrapper'>
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residences</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card, i) => (
                        <SwiperSlide kay={i}>
                            <div className="flexColStart r-card">
                                
                                <div className='homeImage' style={{'background-image': 'url(' + card.image + ')'}}/>
                                <span className="secondaryText r-price">
                                    <span>$</span><span>{card.price}</span>
                                </span>

                                <span className='primaryText'>{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    </section>
  )
}

export default Residencies

const SliderButtons = () => { 
    const swiper = useSwiper ();//função que muda os slides
    return (
        <div className="flexCenter r-button">
            <input type="button" value="&lt;" onClick={() => swiper.slidePrev()}/>
            <input type="button" value="&gt;" onClick={() => swiper.slideNext()}/>
        </div>
    )
}