import DataType from 'sequelize'
import Model from 'src/data/sequelize'

const UserClaim = Model.define('UserClaim', {

  type: {
    type: DataType.STRING,
  },

  value: {
    type: DataType.STRING,
  },

})

export default UserClaim
