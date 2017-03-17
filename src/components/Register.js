import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from 'src/styles/Register.css'

const Register = ({ title }) => (
  <div className={s.root}>
    <div className={s.container}>
      <h1>{title}</h1>
      <p>...</p>
    </div>
  </div>
)

Register.propTypes = {
  title: PropTypes.string.isRequired,
}

export default withStyles(s)(Register)
