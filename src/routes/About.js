import React from 'react'
import Layout from 'src/components/Layout'
import Page from 'src/components/Page'

export default {

  path: '/about',

  async action() {
    const data = await require.ensure([], require => require('src/resources/About.md'), 'about')

    return {
      title: data.title,
      chunk: 'about',
      component: <Layout><Page {...data} /></Layout>,
    }
  },

}
