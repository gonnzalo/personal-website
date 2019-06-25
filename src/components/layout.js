import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const [isHeaderActive, setHeaderActive] = useState(false)
  const [currentLink, setcurrentLink] = useState(-1)
  const mainRef = useRef(null)

  /* SCROLL EFFECT ON NAVEGATION BAR AND EFFECTS ON LINKS  */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300
      const linksArray = mainRef.current.children
      Array.from(linksArray).forEach((e, i) => {
        if (window.scrollY > 10) {
          if (scrollPosition > e.offsetTop) {
            setcurrentLink(i)
          }
        } else if (window.scrollY < 10 && !(window.innerWidth < 750)) {
          setcurrentLink(-1)
        }
      })
      return window.scrollY > 10
        ? setHeaderActive(true)
        : setHeaderActive(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  useEffect(() => {
    if (window.innerWidth < 750) {
      setcurrentLink(0)
    }

    return window.scrollY > 10 ? setHeaderActive(true) : setHeaderActive(false)
  }, [])

  return (
    <>
      <Header isHeaderActive={isHeaderActive} currentLink={currentLink} />
      <div>
        <main ref={mainRef}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
