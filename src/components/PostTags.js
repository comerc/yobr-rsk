import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { urlencode } from 'src/core/utils'
import s from '../styles/PostTags.css'
import Link from './Link'

const PostTags = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null
  }
  return (
    <div className={s.root}>
      <div className={s.container}>
        <ul>
          {tags.map(tag =>
            <li key={tag}>
              <Link
                to={`/search/?q=%5B${urlencode(tag)}%5D&target_type=posts`}
                rel="tag"
              >{tag}</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

PostTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default withStyles(s)(PostTags)
