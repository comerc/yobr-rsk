import DataType from 'sequelize'
import Model from 'src/data/sequelize'

const UserLogin = Model.define('UserLogin', {

  name: {
    type: DataType.STRING(50),
    primaryKey: true,
  },

  key: {
    type: DataType.STRING(100),
    primaryKey: true,
  },

})

export default UserLogin
