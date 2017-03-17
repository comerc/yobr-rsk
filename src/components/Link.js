import React, { PropTypes } from 'react'
import history from 'src/core/history'

function isLeftClickEvent(event) {
  return event.button === 0
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

const Link = ({ onClick, to, children, ...props }) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event)
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return
    }

    if (event.defaultPrevented === true) {
      return
    }

    event.preventDefault()
    history.push(to)
  }

  return <a href={to} {...props} onClick={handleClick}>{children}</a>
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

Link.defaultProps = {
  onClick: null,
}

export default Link
