import React from 'react'
import Layout from 'src/components/Layout'
import Login from 'src/components/Login'

const title = 'Log In'

export default {

  path: '/login',

  action() {
    return {
      title,
      component: <Layout><Login title={title} /></Layout>,
    }
  },

}
