import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from '../styles/Contact.css'

const Contact = ({ title }) => (
  <div className={s.root}>
    <div className={s.container}>
      <h1>{title}</h1>
      <p>...</p>
    </div>
  </div>
)

Contact.propTypes = {
  title: PropTypes.string.isRequired,
}

export default withStyles(s)(Contact)
