import { combineReducers } from 'redux'
import app from './app'
import flows from './flows'
import hubs from './hubs'
import postForm from './postForm'
import posts from './posts'
import runtime from './runtime'
import currentUser from './currentUser'
import user from './user'

export default combineReducers({
  app,
  flows,
  hubs,
  postForm,
  posts,
  runtime,
  currentUser,
  user,
})
