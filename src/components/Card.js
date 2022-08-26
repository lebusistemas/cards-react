import React from 'react'
import PropTypes from "prop-types"
import './Cards.css'

const Card = ({title, src, url, text }) => {
    return (
        <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
            <div className='overflow'>
                <img src={src} alt="" className='card-img-top'/>
            </div>
            <div className='card-body text-light'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>
                    {
                        text ? text : "Do eu aute ea irure eiusmod do aute aliquip elit cillum. Ipsum id incididunt deserunt mollit eiusmod nisi nostrud dolore aliqua id mollit occaecat ex. Laboris amet veniam dolore eiusmod consectetur eiusmod cillum eu sunt. Mollit cillum quis dolore nulla voluptate"
                    }
                </p>
                <a href={url} className='btn btn-outline-secondary rounded-0' target='_blank' rel="noreferrer">
                    Go to this website
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    src: PropTypes.string,
    text: PropTypes.string
}

export default Card
