import React from 'react'
import Layout from 'src/components/Layout'
import PostPage from 'src/components/PostPage'

const title = 'Публикация'

export default {

  path: '/post/:id(\\d+)?',

  action({ params: { id } }) {
    if (id === void 0) {
      return { redirect: '/post/all' }
    }
    id = parseInt(id, 10)
    if (!id) {
      throw { HTTPStatus: 404 }
    }
    // TODO запрашивать данные для каждой страницы, присваивать title
    // TODO выбрасывать 404, если пост не найден в базе
    return {
      title,
      component: <Layout><PostPage id={id} /></Layout>,
    }
  },

}
