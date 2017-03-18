import React from 'react'
import Layout from 'src/components/Layout'

const title = 'Admin Page'
const isAdmin = false

export default {

  path: '/admin',

  async action() {
    if (!isAdmin) {
      return { redirect: '/login' }
    }

    const Admin = await require.ensure([], require => require('src/components/Admin').default, 'admin')

    return {
      title,
      chunk: 'admin',
      component: <Layout><Admin title={title} /></Layout>,
    }
  },

}
