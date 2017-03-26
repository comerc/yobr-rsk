import React, { PropTypes } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { pureComponent } from 'src/core/utils'
import s from '../styles/PostAdd.css'

const PostAdd = () => (
  <div className={s.root}>
    <div className={s.container}>
      <FloatingActionButton mini={true} href="/post/add">
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </div>
)

PostAdd.propTypes = {

}

export default withStyles(s)(pureComponent(PostAdd))
