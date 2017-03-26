import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { pureComponent } from 'src/core/utils'
import s from '../styles/PostFormSubmit.css'

const styles = {
  ghostButton: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const PostFormSubmit = ({ isLoading }) => (
  <div className={s.root}>
    <div className={s.container}>
      <br/>
      <RaisedButton
        label="Отправить"
        primary={true}
        disabled={isLoading}
        containerElement="label"
      >
        <button style={styles.ghostButton} />
      </RaisedButton>
    </div>
  </div>
)

PostFormSubmit.propTypes = {
  isLoading: PropTypes.bool,
}

export default withStyles(s)(pureComponent(PostFormSubmit))
