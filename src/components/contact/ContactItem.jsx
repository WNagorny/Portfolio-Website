import React from 'react'

const ContactItem = ({ icon, name, info, link }) => {
	return (
		<article className='contact__option'>
         <span className='contact__option-icon'>{icon}</span>
        <h4>{name}</h4>
        <h5>{info}</h5>
        <a href={link} target='_blank'>Send a message</a>
		</article>
	)
}

export default ContactItem
