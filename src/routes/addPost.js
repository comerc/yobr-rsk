import React from 'react'
import { actions } from 'src/ducks/postForm'
import Layout from 'src/components/Layout'
import PostForm from 'src/components/PostForm'

const title = 'Новая публикация'

export default {

  path: '/post/add',

  action(context) {
    context.store.dispatch(actions.reset())
    return {
      title,
      component: <Layout><PostForm /></Layout>,
    }
  },

}
