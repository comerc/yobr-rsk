import React from 'react'
import { actions } from 'src/ducks/postForm'
import Layout from 'src/components/Layout'
import PostForm from 'src/components/PostForm'

const title = 'Редактирование публикации'

export default {

  path: '/post/:id/edit',

  async action(context) {
    const id = parseInt(context.params.id, 10)
    if (!id) {
      throw { HTTPStatus: 404 }
    }
    const result = () => ({
      title,
      component: <Layout><PostForm /></Layout>,
    })
    const state = context.store.getState()
    if (id === state.postForm.id) {
      return result()
    }
    return await context.store.dispatch(actions.read(id))
      .then(() => result())
      .catch((error) => {
        if (__DEV__) {
          throw error
        } else {
          throw { HTTPStatus: 404 }
        }
      })
  },

}
