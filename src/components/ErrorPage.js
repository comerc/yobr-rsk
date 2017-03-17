import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from '../styles/ErrorPage.css'

const ErrorPage = (props) => {
  if (__DEV__) {
    const { error: { name, message, stack } } = props
    return (
      <div>
        <h1>{name}</h1>
        <p>{message}</p>
        <pre>{stack}</pre>
      </div>
    )
  }
  return (
    <div>
      <h1>Error</h1>
      <p>Sorry, a critical error occurred on this page.</p>
    </div>
  )
}

if (__DEV__) {
  ErrorPage.propTypes = {
    error: PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      stack: PropTypes.string.isRequired,
    }).isRequired,
  }
}

export { ErrorPage as ErrorPageWithoutStyle }
export default withStyles(s)(ErrorPage)
