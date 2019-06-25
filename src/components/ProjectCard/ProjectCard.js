import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPodcast } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import AOS from "aos"
import Image from "../image"
import "aos/dist/aos.css"

import "./ProjectCard.css"

const ProjectSkill = ({ skill }) => {
  return <span className="project-skill">{skill}</span>
}

const ProjectSkills = ({ skills }) => {
  return (
    <div className="project-skills">
      {skills.map((skill, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <ProjectSkill skill={skill} key={index} />
      })}
    </div>
  )
}

const ProjectLinks = ({ preview, github }) => {
  return (
    <div className="project-links">
      <a href={preview} rel="noopener" className="project-link">
        Live Demo <FontAwesomeIcon icon={faPodcast} className="icon-links" />
      </a>
      <a href={github} rel="noopener" className="project-link secondary">
        <FontAwesomeIcon icon={faGithub} className="icon-links" /> View Source
      </a>
    </div>
  )
}

const ProjectCard = ({ title, description, skills, links, image }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <div className="grid-projects">
      <div
        className="image-container"
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-delay="50"
      >
        <Image imgName={image} />
      </div>
      <div
        className="project-content"
        data-aos="fade-right"
        data-aos-once="true"
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <ProjectSkills skills={skills} />
        <ProjectLinks preview={links.preview} github={links.github} />
      </div>
    </div>
  )
}

ProjectSkill.propTypes = {
  skill: PropTypes.string.isRequired,
}

ProjectSkills.propTypes = {
  skills: PropTypes.string.isRequired,
}

ProjectLinks.propTypes = {
  preview: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default ProjectCard
