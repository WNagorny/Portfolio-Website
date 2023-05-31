import React from 'react'
import ArticleItem from './ArticleItem'

function ExperienceBox({ title,title2 }) {
	return (
		<div className='container experience__container'>
			<div className='experience__tech'>
				<h3>{title}</h3>
				<div className='experience__content'>
					<ArticleItem text='HTML' />
					<ArticleItem text='CSS' />
					<ArticleItem text='Javascript' />
					<ArticleItem text='Bootstrap' />
					<ArticleItem text='Tailwind' />
					<ArticleItem text='React' />
				</div>
			</div>

			<div className='experience__tech'>
				<h3>{title2}</h3>
				<div className='experience__content'>
					<ArticleItem text='lorem' />
					<ArticleItem text='lorem' />
					<ArticleItem text='lorem' />
					<ArticleItem text='lorem' />
					<ArticleItem text='lorem' />
					<ArticleItem text='lorem' />
				</div>
			</div>
		</div>
	)
}

export default ExperienceBox
