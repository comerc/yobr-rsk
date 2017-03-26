import React, { PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from '../styles/PostBody.css'


const PostBody = ({ isTeaser, content, children }) => (
  <div className={s.root}>
    <div className={s.container}>
      <div className={isTeaser ? s.crop : null}>
        <div
          className={cx(s.content, s.htmlFormat)}
          // TODO dangerouslySetInnerHTML={{ __html: content }}
        >{content}</div>
        {children}
      </div>
    </div>
  </div>
)

PostBody.propTypes = {
  isTeaser: PropTypes.bool,
  content: PropTypes.string,
  children: PropTypes.element,
}

export default withStyles(s)(PostBody)
