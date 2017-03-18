import React from 'react'
import Layout from 'src/components/Layout'
import Contact from 'src/components/Contact'

const title = 'Contact Us'

export default {

  path: '/contact',

  action() {
    return {
      title,
      component: <Layout><Contact title={title} /></Layout>,
    }
  },

}
