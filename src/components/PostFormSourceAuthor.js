import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { handleChange, pureComponent } from 'src/core/utils'
import s from '../styles/PostFormSourceAuthor.css'

const PostFormSourceAuthor = ({ sourceAuthor, isTranslation, input, error }) => (
  <div className={s.root}>
    <div className={s.container}>
      <TextField
        id="PostFormSourceAuthor"
        floatingLabelText="Автор оригинального текста"
        hintText="Например, Tim O'Reily"
        value={sourceAuthor}
        errorText={error}
        onChange={handleChange('sourceAuthor', input, !!error)}
        fullWidth={true}
        disabled={!isTranslation}
      />
    </div>
  </div>
)

PostFormSourceAuthor.propTypes = {
  sourceAuthor: PropTypes.string,
  isTranslation: PropTypes.bool,
  input: PropTypes.func,
  error: PropTypes.string,
}

export default withStyles(s)(pureComponent(PostFormSourceAuthor))
