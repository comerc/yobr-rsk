/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,
    require('./contact').default,
    require('./login').default,
    require('./register').default,
    require('./about').default,
    require('./privacy').default,
    require('./admin').default,
    require('./addPost').default,
    require('./post').default,
    require('./postList').default,
    require('./editPost').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    try {
      const route = await next()
      // Provide default values for title, description etc.
      route.title = `${route.title || 'Untitled Page'} - YOBR`
      route.description = route.description || ''
      return route
    } catch (error) {
      if (error.HTTPStatus === 404) {

      }
      throw error
    }
  },

}
