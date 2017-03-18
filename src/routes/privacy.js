import React from 'react'
import Layout from 'src/components/Layout'
import Page from 'src/components/Page'

export default {

  path: '/privacy',

  async action() {
    const data = await require.ensure([], require => require('src/resources/privacy.md'), 'privacy')

    return {
      title: data.title,
      chunk: 'privacy',
      component: <Layout><Page {...data} /></Layout>,
    }
  },

}
