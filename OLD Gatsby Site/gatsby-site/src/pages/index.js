import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homeContainer">
      <img src={'/dark-noise-hero-transparent.png'} alt="App Icon"/>
      <h3>Simple. Fast. White noise, refined.</h3>
      <div className="homeButtons">
        <a href="https://apps.apple.com/us/app/dark-noise/id1465439395">
          <img src={'appstore.png'} alt="Download on the App Store"/>
        </a>
      </div>
      <div className="presskit-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/D4dbuYqoHmA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </Layout>
)

export default IndexPage
