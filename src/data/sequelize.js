import Sequelize from 'sequelize'
import { databaseUrl } from 'src/config'

const sequelize = new Sequelize(databaseUrl, {
  define: {
    freezeTableName: true,
  },
})

export default sequelize
