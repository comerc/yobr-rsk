import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import s from '../styles/PostPage.css'
import Post from './Post'

const PostPage = ({ ...post }) => (
  <div className={s.root}>
    <div className={s.container}>
      <Post {...post} />
    </div>
  </div>
)

PostPage.propTypes = {
  // id: PropTypes.number,
}

const getId = (state, ownProps) =>
  ownProps.id

const getPosts = (state) =>
  state.posts

const mapStateToProps = createSelector(
  [getPosts, getId],
  (posts, id) =>
    posts.find(element =>
      element.id === id)
)

export default withStyles(s)(connect(mapStateToProps)(PostPage))
