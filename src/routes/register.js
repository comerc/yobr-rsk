import React from 'react'
import Layout from 'src/components/Layout'
import Register from 'src/components/Register'

const title = 'New User Registration'

export default {

  path: '/register',

  action() {
    return {
      title,
      component: <Layout><Register title={title} /></Layout>,
    }
  },

}
