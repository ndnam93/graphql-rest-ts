import { Sequelize } from 'sequelize-typescript';


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite',
    logging: false,
    models: [__dirname + '/*.model.*'],
});

export default sequelize;
