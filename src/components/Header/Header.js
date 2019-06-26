import { Link } from "gatsby"
import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import PropTypes from "prop-types"
import Image from "../image"
import "./header.css"
import "./hamburger.css"

const Header = props => {
  const { isHeaderActive, currentLink } = props
  const [isBurgerActive, setBurger] = useState(false)

  const handleCLik = () => {
    setBurger(!isBurgerActive)
  }

  return (
    <header className={`${isHeaderActive ? "header-active" : ""}`}>
      <div
        className={`${
          isHeaderActive
            ? "nav-container nav-container-active"
            : "nav-container"
        }`}
      >
        <div className="logo">
          <Link to="/">
            <Image imgName="logo.png" className="some" />
          </Link>
        </div>
        <nav
          className={`${isBurgerActive ? "navbar navbar-active" : "navbar"}`}
        >
          <ul className="nav-list">
            <li>
              <AnchorLink
                offset="100"
                href="#home"
                className={`${
                  currentLink === 0 ? "link-effect link-active" : "link-effect"
                }`}
                onClick={() => setBurger(false)}
              >
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset="100"
                href="#projects"
                className={`${
                  currentLink === 1 ? "link-effect link-active" : "link-effect"
                }`}
                onClick={() => setBurger(false)}
              >
                Projects
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset="100"
                href="#contact"
                className={`${
                  currentLink === 2 ? "link-effect link-active" : "link-effect"
                }`}
                onClick={() => setBurger(false)}
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </nav>
        <button
          className={`${
            isBurgerActive
              ? "is-active hamburger hamburger--elastic"
              : "hamburger hamburger--elastic"
          }`}
          type="button"
          aria-label="Open the menu"
          onClick={handleCLik}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  isHeaderActive: PropTypes.bool.isRequired,
  currentLink: PropTypes.number.isRequired,
}

export default Header
