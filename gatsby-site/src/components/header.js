import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#322D3C`,
    }}
  >
    <div className="header">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
          }}
        >
          <div className="header-title">
            <img src={'/dark-noise-app-icon-cropped-300.png'} alt="App Icon"/>
            {siteTitle}
          </div>
        </Link>
      </h1>
      <div className="header-links">
        <Link to="/presskit">Press Kit</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
