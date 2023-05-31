import React from 'react'
import './portfolio.css'
import PortfolioArticle from './PortfolioArticle'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <PortfolioArticle image ={IMG1} url='https://github.com/WNagorny/EliteFurniture-Website'/>
        <PortfolioArticle image ={IMG2} url='hhttps://github.com/WNagorny/DriveEasy-website'/>
        <PortfolioArticle image ={IMG3} url='https://github.com/WNagorny/LampLuxe-website'/>
        <PortfolioArticle image ={IMG4} url='https://github.com/WNagorny/Forest-Parallax-scrolling'/>
        <PortfolioArticle image ={IMG5} url='https://github.com/WNagorny/WeatherApp'/>
        <PortfolioArticle image ={IMG6} url='https://github.com/WNagorny/TodoList'/>

      </div>
    </section>
  )
}

export default Portfolio