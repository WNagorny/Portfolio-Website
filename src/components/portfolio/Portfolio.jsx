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

        <PortfolioArticle 
        image ={IMG1} 
        gitUrl='https://github.com/WNagorny/EliteFurniture-Website' 
        demoUrl ="https://wnagorny.github.io/EliteFurniture-Website/"
        projectName = "Elite Furniture Website" 
        />

        <PortfolioArticle 
        image ={IMG2} 
        gitUrl='hhttps://github.com/WNagorny/DriveEasy-website' 
        demoUrl ="https://wnagorny.github.io/DriveEasy-website/"
        projectName = "Drive Easy Website" 
        />

        <PortfolioArticle 
        image ={IMG3} 
        gitUrl='https://github.com/WNagorny/LampLuxe-website' 
        demoUrl ="https://wnagorny.github.io/LampLuxe-website/"
        projectName = "Lump Lux Website" 

        />

        <PortfolioArticle 
        image ={IMG4} 
        gitUrl='https://github.com/WNagorny/Forest-Parallax-scrolling' 
        demoUrl ="https://wnagorny.github.io/Forest-Parallax-scrolling/"
        projectName = "Forest-Parallax-scrolling" 

        />

        <PortfolioArticle 
        image ={IMG5} 
        gitUrl='https://github.com/WNagorny/WeatherApp'
        demoUrl ="https://wnagorny.github.io/WeatherApp/"
        projectName = "WeatherApp" 

         />

        <PortfolioArticle 
        image ={IMG6} 
        gitUrl='https://github.com/WNagorny/TodoList' 
        demoUrl ="https://wnagorny.github.io/TodoList/"
        projectName = "To do list" 
        />

      </div>
    </section>
  )
}

export default Portfolio