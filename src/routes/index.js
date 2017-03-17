/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./Home').default,
    require('./Contact').default,
    require('./Login').default,
    require('./Register').default,
    require('./About').default,
    require('./Privacy').default,
    require('./Admin').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./NotFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next()

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - YOBR`
    route.description = route.description || ''

    return route
  },

}
