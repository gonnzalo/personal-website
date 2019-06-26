import React from "react"

import "normalize.css"
import "typeface-montserrat"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Contact from "../sections/Contact/Contact"
import Landing from "../sections/Landing/Landing"
import Projects from "../sections/Projects/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
