import React, { PropTypes } from 'react'
import Toggle from 'material-ui/Toggle'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { pureComponent } from 'src/core/utils'
import s from '../styles/PostFormIsTranslation.css'

const onToggle = (input) => (event, isInputChecked) => {
  input({ key: 'isTranslation', value: !isInputChecked })
  if (isInputChecked) {
    input({ key: 'sourceAuthor', value: '', isValidate: true })
    input({ key: 'sourceLink', value: '', isValidate: true })
  }
}

const PostFormIsTranslation = ({ isTranslation, input }) => (
  <div className={s.root}>
    <div className={s.container}>
      <br/>
      <Toggle
        id="PostFormIsTranslation"
        label="Перевод"
        labelPosition="right"
        toggled={isTranslation}
        onToggle={onToggle(input)}
      />
    </div>
  </div>
)

PostFormIsTranslation.propTypes = {
  isTranslation: PropTypes.bool,
  input: PropTypes.func,
}

export default withStyles(s)(pureComponent(PostFormIsTranslation))
