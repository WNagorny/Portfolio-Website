import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
	return (
		<section id='about'>
			<h5>Get To Now</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='about me image' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>

						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>1.5 Years Studying</small>
						</article>

            <article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>4+ Worldwide</small>
						</article>

            <article className='about__card'>
							<VscFolderLibrary className='about__icon last' />
							<h5>Projects</h5>
							<small>15+ Completed</small>
						</article>

					</div>



          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corrupti ducimus adipisci quis quaerat, quod reiciendis quibusdam nesciunt quam explicabo amet voluptatum modi sit distinctio, quos molestiae ab perferendis necessitatibus?</p>


        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

				</div>
			</div>
		</section>
	)
}

export default about
