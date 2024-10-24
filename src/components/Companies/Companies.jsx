import React from 'react'
import PropTypes from 'prop-types'
import './Companies.css'

const Companies = props => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <img src="public/prologis.png" alt="" />
            <img src="public/equinix.png" alt="" />
            <img src="public/realty.png" alt="" />
            <img src="public/tower.png" alt="" />
        </div>

    </section>
  )
}

Companies.propTypes = {}

export default Companies