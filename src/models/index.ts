import { Sequelize, DataTypes, Model } from 'sequelize';
 // @ts-ignore
// import seed from './seed';


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite',
    logging: false
});

const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING
}, {
    createdAt: false,
    updatedAt: false
});

const Project = sequelize.define('Project', {
  name: DataTypes.STRING
}, {
  createdAt: false,
  updatedAt: false
});

const Task = sequelize.define('Task', {
  description: DataTypes.STRING
}, {
  createdAt: false,
  updatedAt: false
});


User.hasMany(Project);
Project.belongsTo(User);
Project.hasMany(Task);
Task.belongsTo(Project);


sequelize.sync();

// Uncomment the line if you want to rerun DB seed
// sequelize.sync({ force: true }).then(() => seed(sequelize));


export default sequelize;
