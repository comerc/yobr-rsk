import React from 'react'
import { actions } from 'src/ducks/posts'
import Layout from 'src/components/Layout'
import PostList from 'src/components/PostList'

const title = 'Список публикаций'

export default {

  path: '/post/:filterType(all|flow|hub)/:filterId?',

  async action(context) {
    return await context.store.dispatch(actions.read())
      .then(() => ({
        title,
        component: <Layout><PostList {...context.params} /></Layout>,
      }))
      .catch((error) => {
        if (__DEV__) {
          throw error
        } else {
          throw { HTTPStatus: 404 }
        }
      })
  },

}
