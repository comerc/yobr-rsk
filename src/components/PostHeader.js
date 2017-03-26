import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from '../styles/PostHeader.css'
import PostTitle from './PostTitle'
import PostHubs from './PostHubs'

import { formatDateTime } from 'src/core/utils'

// TODO кнопка редактирования для собственных статей

const PostHeader = ({ isTeaser, published, flow, id, title, hubs, isDraft }) => (
  <div className={s.root}>
    <div className={s.container}>
      <span className={s.published}>{formatDateTime(published)}</span>
      <PostTitle {...{ isTeaser, flow, id, title, isDraft }} />
      <PostHubs {...{ hubs }} />
    </div>
  </div>
)

PostHeader.propTypes = {
  isTeaser: PropTypes.bool,
  published: PropTypes.string,
  flow: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  id: PropTypes.number,
  title: PropTypes.string,
  hubs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  isDraft: PropTypes.bool,
}

export default withStyles(s)(PostHeader)
