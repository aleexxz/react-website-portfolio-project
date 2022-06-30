import React from 'react'
import "./about.css"
import ME from "../../assets/about-me-img.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={ME} alt="about-me-img" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>6 months working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>Not yet</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>3 Completed Projects</small>
                        </article>

                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel esse fuga vero. Qui aut vel repellat provident sapiente perferendis? Est sed ipsum temporibus consequuntur maxime, quidem iure culpa velit ducimus.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About