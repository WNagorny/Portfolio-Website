import React from 'react'
import './footer.css'
import { FaFacebook} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'


function Footer() {
  return (
    <footer>
        <a href="#" className='footer__logo'>VangWeb Studio</a>
        <ul className='links'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience </a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="htpps://facebook.com"><FaFacebook/></a>
          <a href="htpps://instagram.com"><FiInstagram/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; VangWeb Studio. All right reserved.</small>
        </div>
    </footer>
  )
}

export default Footer