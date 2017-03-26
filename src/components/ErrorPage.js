import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from '../styles/ErrorPage.css'

const ErrorPage = (props) => {
  if (__DEV__) {
    const { error } = props
    if (error instanceof Error) {
      return (
        <div>
          <h1>{error.name}</h1>
          <p>{error.message}</p>
          <pre>{error.stack}</pre>
        </div>
      )
    }
    return (
      <div>
        <h1>Error</h1>
        <p>{JSON.stringify(error)}</p>
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

export { ErrorPage as ErrorPageWithoutStyle }
export default withStyles(s)(ErrorPage)
