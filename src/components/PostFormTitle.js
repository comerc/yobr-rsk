import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { handleChange, pureComponent } from 'src/core/utils'
import { POST_FORM_TITLE_MAX } from 'src/core/consts'
import s from '../styles/PostFormTitle.css'

const hintStyle = { whiteSpace: 'nowrap', textOverflow: 'ellipsis' }

const PostFormTitle = ({ title, input, error }) => (
  <div className={s.root}>
    <div className={s.container}>
      <TextField
        floatingLabelText={
          title.length === 0
          ?
          'Заголовок'
          :
          `Заголовок (ещё ${POST_FORM_TITLE_MAX - title.length})`
        }
        id="PostFormTitle"
        hintText="Заголовок должен быть наполнен смыслом"
        value={title}
        fullWidth={true}
        errorText={error}
        onChange={handleChange('title', input, !!error)}
        maxLength={POST_FORM_TITLE_MAX}
        hintStyle={hintStyle}
      />
    </div>
  </div>
)

PostFormTitle.propTypes = {
  title: PropTypes.string,
  input: PropTypes.func,
  error: PropTypes.string,
}

export default withStyles(s)(pureComponent(PostFormTitle))
