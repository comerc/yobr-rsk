import React, { PropTypes } from 'react'
import serialize from 'serialize-javascript'
import { analytics } from 'src/config'

const Html = ({ title, description, styles, scripts, state, children }) => (
  <html className="no-js" lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      {styles.map(style =>
        <style
          key={style.id}
          id={style.id}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: style.cssText }}
        />,
      )}
    </head>
    <body>
      <div
        id="app"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: children }}
      />
      {state && (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html:
          `window.APP_STATE=${serialize(state, { isJSON: true })}` }}
        />
      )}
      {scripts.map(script => <script key={script} src={script} />)}
      {analytics.google.trackingId &&
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html:
          'window.ga=function(){ga.q.push(arguments)}ga.q=[]ga.l=+new Date' +
          `ga('create','${analytics.google.trackingId}','auto')ga('send','pageview')` }}
        />
      }
      {analytics.google.trackingId &&
        <script src="https://www.google-analytics.com/analytics.js" async defer />
      }
    </body>
  </html>
)

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  styles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    cssText: PropTypes.string.isRequired,
  }).isRequired),
  scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.object,
  children: PropTypes.string.isRequired,
}

Html.defaultProps = {
  styles: [],
  scripts: [],
  state: null,
}

export default Html
