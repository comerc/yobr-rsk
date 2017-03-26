import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { handleChange, pureComponent } from 'src/core/utils'
import s from '../styles/PostFormContent.css'

const hintStyle = { whiteSpace: 'nowrap', textOverflow: 'ellipsis' }

const PostFormContent = ({ content, input, error }) => (
  <div className={s.root}>
    <div className={s.container}>
      <TextField
        id="PostFormContent"
        floatingLabelText="Текст"
        hintText="Для переноса строк в тексте нажмите [ENTER]"
        value={content}
        fullWidth={true}
        errorText={error}
        onChange={handleChange('content', input, !!error)}
        multiLine={true}
        hintStyle={hintStyle}
      />
    </div>
  </div>
)

PostFormContent.propTypes = {
  content: PropTypes.string,
  input: PropTypes.func,
  error: PropTypes.string,
}

export default withStyles(s)(pureComponent(PostFormContent))
