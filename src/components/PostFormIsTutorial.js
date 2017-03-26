import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { handleCheck, pureComponent } from 'src/core/utils'
import s from '../styles/PostFormIsTutorial.css'

const PostFormIsTutorial = ({ isTutorial, input }) => (
  <div className={s.root}>
    <div className={s.container}>
      <Checkbox
        id="PostFormIsTutorial"
        label="Tutorial"
        checked={isTutorial}
        onCheck={handleCheck('isTutorial', input)}
      />
    </div>
  </div>
)

PostFormIsTutorial.propTypes = {
  isTutorial: PropTypes.bool,
  input: PropTypes.func,
}

export default withStyles(s)(pureComponent(PostFormIsTutorial))
