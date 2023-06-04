import React from 'react'
import TestimonialItem from './TestimonialItem'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import './testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
import SwiperCore, { Autoplay } from 'swiper'


const testimonialsData = [
	{
		id: 1,
		avatar: AVTR1,
		clientName: 'Dana',
		clientReview:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta vitae ipsum nam ipsam pariatur repudiandae in officiis laborum rem, similique atque omnis eaque quia quos',
	},
	{
		id: 2,
		avatar: AVTR2,
		clientName: 'Daniel',
		clientReview:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta vitae ipsum nam ipsam pariatur repudiandae in officiis laborum rem, similique atque omnis eaque quia quos',
	},
	{
		id: 3,
		avatar: AVTR3,
		clientName: 'Andrew',
		clientReview:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta vitae ipsum nam ipsam pariatur repudiandae in officiis laborum rem, similique atque omnis eaque quia quos',
	},
	{
		id: 4,
		avatar: AVTR4,
		clientName: 'Melissa',
		clientReview:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta vitae ipsum nam ipsam pariatur repudiandae in officiis laborum rem, similique atque omnis eaque quia quos',
	},
]

SwiperCore.use([Autoplay])

function Testimonials() {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				className='container testimonials__container mySwiper'
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				speed={600}
				loop={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
			>
				{testimonialsData.map(testimonial => (
					<SwiperSlide key={testimonial.id}>
						<TestimonialItem
							avatar={testimonial.avatar}
							clientName={testimonial.clientName}
							clientReview={testimonial.clientReview}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Testimonials
