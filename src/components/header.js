import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import styled from "styled-components"

const Header = ({ siteTitle }) => {
  const style = {
    textDecoration: "none",
    color: "#fff",
    display: "inline-block",
    padding: "0 10px 0 0",
  }
  return (
    <header
      style={{
        background: `#c00`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <Link style={style} to="/">
            Home
          </Link>
          <Link style={style} to="/notify">
            Notify me
          </Link>
          <Link style={style} to="/domain-search">
            Domain search
          </Link>
          <Link style={style} to="/who">
            Who's been pwned
          </Link>
          <Link style={style} to="/passwords">
            Passwords
          </Link>
          <Link style={style} to="/api">
            API
          </Link>
          <Link style={style} to="/about">
            About
          </Link>
          <Link style={style} to="/donate ">
            Donate{" "}
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
