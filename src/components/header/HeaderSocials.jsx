import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {DiGithubBadge} from 'react-icons/di'


function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/walery-nagorny/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/WNagorny/" target='_blank'><DiGithubBadge/></a>
    </div>
  )
}

export default HeaderSocials