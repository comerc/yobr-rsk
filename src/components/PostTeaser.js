import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { pureComponent } from 'src/core/utils'
import s from '../styles/PostTeaser.css'
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostReadMore from './PostReadMore'
import PostInfoPanel from './PostInfoPanel'

const PostTeaser = ({ id, published, flow, hubs, title, isDraft,
  content, author, viewsCount, favoritesCount }) => (
  <div className={s.root}>
    <div className={s.container}>
      <PostHeader isTeaser {...{ id, published, flow, hubs, title, isDraft }} />
      <PostBody isTeaser {...{ content }}>
        <PostReadMore {...{ id }} />
      </PostBody>
      <div className={s.footer}>
        <PostInfoPanel isTeaser {...{ id, author, viewsCount, favoritesCount }} />
      </div>
    </div>
  </div>
)

PostTeaser.propTypes = {
  id: PropTypes.number,
  published: PropTypes.string,
  flow: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  hubs: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  isDraft: PropTypes.bool,
  author: PropTypes.shape({
    id: PropTypes.number,
    nick: PropTypes.string,
    name: PropTypes.string,
    specialization: PropTypes.string,
    contacts: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
    })),
    votingCounter: PropTypes.number,
    karma: PropTypes.number,
    rating: PropTypes.number,
  }),
  content: PropTypes.string,
  viewsCount: PropTypes.number,
  favoritesCount: PropTypes.number,
}

export default withStyles(s)(pureComponent(PostTeaser))
