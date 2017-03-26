import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { handleSelectFieldChange, pureComponent } from 'src/core/utils'
import s from '../styles/PostFormFlow.css'

const PostFormFlow = ({ flowId, sourceFlows, input, error }) => (
  <div className={s.root}>
    <div className={s.container}>
      <SelectField
        id="PostFormFlow"
        floatingLabelText="Поток"
        hintText="Выберите поток"
        value={flowId}
        errorText={error}
        onChange={handleSelectFieldChange('flow', input, sourceFlows, !!error)}
      >
        {sourceFlows.map(({ id, name }) =>
          <MenuItem key={id} value={id} primaryText={name} />
        )}
      </SelectField>
    </div>
  </div>
)

PostFormFlow.propTypes = {
  flowId: PropTypes.string,
  sourceFlows: PropTypes.arrayOf(PropTypes.shape({

  })),
  input: PropTypes.func,
  error: PropTypes.string,
}

export default withStyles(s)(pureComponent(PostFormFlow))
