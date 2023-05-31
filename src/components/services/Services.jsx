import React from 'react'
import './services.css'
import ServiceListItem from './ServiceListItem'
import ServiceArticle from './ServiceArticle'
import { BiCheck } from 'react-icons/bi'

function Services() {
	return (
		<section id='services'>
			<h5>What I Offer</h5>
			<h2>Services</h2>

			<div className='container services__container'>
				<ServiceArticle title='UI/UX Design'>
					<ul className='service__list'>
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
					</ul>
				</ServiceArticle>

				<ServiceArticle title='Web Development'>
					<ul className='service__list'>
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
					</ul>
				</ServiceArticle>

				<ServiceArticle title='Content Creation'>
					<ul className='service__list'>
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
						<ServiceListItem text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
					</ul>
				</ServiceArticle>
			</div>
		</section>
	)
}

export default Services
