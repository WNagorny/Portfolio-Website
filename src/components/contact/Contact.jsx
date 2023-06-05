import React from 'react'
import './contact.css'
import ContactItem from './ContactItem'

import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

function Contact() {
	return (
		<section id='contact'>
			<h5>Get in Touch</h5>
			<h2>Contact me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<ContactItem
						icon= {<MdOutlineEmail/>}
						name='Email'
						info='walery.nagorny@gmail.com'
						link='mailto:walery.nagorny@gmail.com'
					/>

					<ContactItem
						icon= {<RiMessengerLine/>}
						name='Messenger'
						info='Walery Nagorny'
						link='https://m.me/nagornyi.valerka'
					/>

					<ContactItem
						icon= {<BsWhatsapp/>}
						name='WhatsApp'
						info='+48 739-682-985'
						link='https://api.whatsapp.com/send?phone=+48739682985'
					/>
				</div>

				<form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
			</div>
		</section>
	)
}

export default Contact
