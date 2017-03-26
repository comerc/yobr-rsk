import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Link from './Link'
import s from '../styles/PostReadMore.css'

const PostReadMore = ({ id }) => (
  <div className={s.root}>
    <div className={s.container}>
      <Link to={`/post/${id}/#more`}>Читать дальше →</Link>
    </div>
  </div>
)

PostReadMore.propTypes = {
  id: PropTypes.number,
}

export default withStyles(s)(PostReadMore)
