import React from 'react'

const PortfolioArticle = ({ image, url }) => {
	return (
		<article className='portfolio__item'>
			<div className='portfolio__item-image'>
				<img src={image} alt='photo of project' />
			</div>
			<h3>Furniture Website</h3>
			<div className='portfolio__item-cta'>
				<a href={url} target='_blank' className='btn'>
					Github
				</a>
			</div>
		</article>
	)
}

export default PortfolioArticle
