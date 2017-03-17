import React from 'react'
import Layout from 'src/components/Layout'
import NotFound from 'src/components/NotFound'

const title = 'Page Not Found'

export default {

  path: '*',

  action() {
    return {
      title,
      component: <Layout><NotFound title={title} /></Layout>,
      status: 404,
    }
  },

}
