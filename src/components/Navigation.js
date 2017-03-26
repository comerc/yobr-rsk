import React from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from '../styles/Navigation.css'
import Link from './Link'

const Navigation = () => (
  <div className={s.root} role="navigation">
    <Link className={s.link} to="/post/all">Blog</Link>
    <Link className={s.link} to="/about">About</Link>
    <Link className={s.link} to="/contact">Contact</Link>
    <span className={s.spacer}> | </span>
    <Link className={s.link} to="/login">Log in</Link>
    <span className={s.spacer}>or</span>
    <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
  </div>
)

export default withStyles(s)(Navigation)
