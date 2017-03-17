import React from 'react'
import Home from 'src/components/Home'
import fetch from 'src/core/fetch'
import Layout from 'src/components/Layout'

export default {

  path: '/',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{news{title,link,content}}',
      }),
      credentials: 'include',
    })
    const { data } = await resp.json()
    if (!data || !data.news) throw new Error('Failed to load the news feed.')
    return {
      title: 'React Starter Kit',
      component: <Layout><Home news={data.news} /></Layout>,
    }
  },

}
