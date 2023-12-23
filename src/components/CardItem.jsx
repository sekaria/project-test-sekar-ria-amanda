import React from 'react'
import PropTypes from 'prop-types'

function CardItem({ src, date, title }) {
	return (
		<li className="cards-item">
			<div className="cards-item-pic-wrap">
				<img className="cards-item-img" src={src} alt="Image" loading="lazy" />
			</div>
			<div className="cards-item-info">
				<p className="cards-item-date">{date}</p>
				<h1 className="cards-item-text">{title}</h1>
			</div>
		</li>
	)
}

CardItem.propTypes = {
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
}

export default CardItem
