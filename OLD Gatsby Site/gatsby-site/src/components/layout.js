/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="mainContainer">
        <main>{children}</main>
      </div>
      <footer>
        <div className="footer-social">
          <a href="https://twitter.com/DarkNoiseApp">
            <img src={'/twitter-icon.svg'} alt="twitter" />
          </a>
          <a href="mailto:dev.charliemchapman@gmail.com">
            <img src={'/mail-icon.svg'} alt="email" />
          </a>
        </div>
        <div>Made by <a href="https://charliemchapman.com/">Charlie Chapman</a> in St. Louis</div>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link> | © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
