import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { ga } from 'src/core/utils'
import s from '../styles/PostHubs.css'
import Link from './Link'

// TODO реализовать переходы по хабам

const onClick = (hub) => (event) => {
  event.preventDefault()
  alert(event.target.href)
  ga('hub', 'feed page', hub.name)
}

const PostHubs = ({ hubs }) => (
  <div className={s.root}>
    <div className={s.container}>
      <ul>
        {hubs.map(hub =>
          <li key={hub.id}>
            <Link
              to={`/post/hub/${hub.id}/`}
              title={hub.isSubscribed ? 'Вы подписаны на этот хаб' : 'Вы не подписаны на этот хаб'}
              onClick={onClick(hub)}
              className={hub.isSubscribed ? s.subscribed : null}
            >{hub.name}</Link>
            {hub.isProfiled && <span className={s.profiled} title="Профильный хаб">*</span>}
          </li>
        )}
      </ul>
    </div>
  </div>
)

PostHubs.propTypes = {
  hubs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
}

export default withStyles(s)(PostHubs)
