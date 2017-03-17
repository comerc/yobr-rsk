import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from '../styles/Layout.css'
import Header from './Header'
import Feedback from './Feedback'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Feedback />
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(s)(Layout)
