import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./landing.css"

const Landing = () => {
  return (
    <section id="home" className="landing-page">
      <div className="home-container">
        <h1>
          Hi! Im <span className="tittle-green">Gonzalo!</span>
        </h1>
        <h2>
          <span className="tittle-green">Front End</span> Developer
        </h2>
        <AnchorLink offset="100" href="#projects" aria-label="projects">
          <span></span>
        </AnchorLink>
      </div>
    </section>
  )
}

export default Landing
