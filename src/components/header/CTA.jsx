import React from 'react'
import CV_WNAGORNY from '../../assets/CV_WNAGORNY.pdf'


function CTA() {
  return (
    <div className='cta'>
      <a href={CV_WNAGORNY} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA