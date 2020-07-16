/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import GitHubCorner from 'components/GitHubCorner';

import "./scheme.scss"
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main data-theme="color-1" className="main">
        { children }
      </main>
      <GitHubCorner/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
