import React from 'react'
import "./portfolio.css"
import PortfolioData from './PortfolioData'

const Portfolio = () => {
    const dataSet = PortfolioData.map(set => {
        return (
            <article key={set.id} className='portfolio__item'>
                <div className="portfolio__item-img">
                    <img src={set.image} alt={set.title} />
                </div>
                <h3>{set.title}</h3>
                <div className="portfolio__item-cta">
                    <a href={set.github} className='btn' target="_blank">My GitHub</a>
                    <a href={set.demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
            </article>
        )
    })

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {dataSet}
            </div>
        </section>
    )
}
export default Portfolio