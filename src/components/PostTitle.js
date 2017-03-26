import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { ga } from 'src/core/utils'
import s from '../styles/PostTitle.css'
import Link from './Link'

const PostTitle = ({ isTeaser, flow, id, title, isDraft }) => (
  <div className={s.root}>
    <div className={s.container}>
      <h1>
        {isTeaser ?
          <span>
            <Link className={s.flow} to={`/post/flow/${flow.id}/`} onClick={ga('flow', 'feed page', flow.name)}>{flow.name}</Link>
            <span className={s.arrow}> → </span>
            <Link className={s.link} to={`/post/${id}/`}>{title}</Link>
          </span>
        :
          {title}
        }
        {isDraft && <sup>&nbsp;*&nbsp;черновик</sup>}
        <sup>&nbsp;<Link className={s.link} to={`/post/${id}/edit`}>edit</Link></sup>
      </h1>
    </div>
  </div>
)

PostTitle.propTypes = {
  isTeaser: PropTypes.bool,
  flow: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  id: PropTypes.number,
  title: PropTypes.string,
  isDraft: PropTypes.bool,
}

export default withStyles(s)(PostTitle)
