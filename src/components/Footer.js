import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from '../styles/Footer.css'
import Link from './Link'

const Footer = () => (
  <div className={s.root}>
    <div className={s.container}>
      <span className={s.text}>© Your Company</span>
      <span className={s.spacer}>·</span>
      <Link className={s.link} to="/">Home</Link>
      <span className={s.spacer}>·</span>
      <Link className={s.link} to="/admin">Admin</Link>
      <span className={s.spacer}>·</span>
      <Link className={s.link} to="/privacy">Privacy</Link>
      <span className={s.spacer}>·</span>
      <Link className={s.link} to="/not-found">Not Found</Link>
    </div>
  </div>
)

export default withStyles(s)(Footer)
