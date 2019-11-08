import Sequelize from 'sequelize';
import Students from '../app/models/Students';
import databaseConfig from '../config/database';
import User from '../app/models/User';

const models = [Students, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
