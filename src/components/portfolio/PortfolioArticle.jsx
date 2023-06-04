import React from 'react'
import './portfolio.css'



const PortfolioArticle = ({ image, gitUrl, demoUrl,projectName }) => {
	return (
		<article className='portfolio__item'>
			<div className='portfolio__item-image'>
				<img src={image} alt='project' />
			</div>
			<h3>{projectName}</h3>
			<div className='portfolio__item-cta'>
				<a href={gitUrl} target='_blank' className='btn' rel='noreferrer'>
					Github
				</a>
				<a href={demoUrl} target='_blank' className='btn btn-primary' rel='noreferrer'>
					LiveDemo
				</a>
			</div>
		</article>
	)
}

export default PortfolioArticle