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
      </div>
      <AnchorLink offset="100" href="#projects">
        <span></span>
      </AnchorLink>
    </section>
  )
}

export default Landing
