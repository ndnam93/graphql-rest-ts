import sequelize from ".";
import User from "./User.model";
import Project from "./Project.model";
import Task from "./Task.model";
// Add some data in the database
// const { User, Project, Task } = sequelize.models;

(async () => {
  await sequelize.sync({ force: true });

  User.create({
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com'
  })
  .then((user) => Project.create({
    name: 'Migrate from REST to GraphQL',
    userId: user.id
  }))
  .then((project) => {
    Task.create({
      description: 'Read tutorial',
      projectId: project.id
    });
    Task.create({
      description: 'Start coding',
      projectId: project.id
    });
    return Promise.resolve(project);
  })
  .then((project) => Project.create({
    name: 'Create a blog',
    userId: project.userId
  }))
  .then((project) => {
    Task.create({
      description: 'Write draft of article',
      projectId: project.id
    });
    Task.create({
      description: 'Set up blog platform',
      projectId: project.id
    });
    return Promise.resolve();
  })
  .then(() => User.create({
    firstname: 'Alicia',
    lastname: 'Smith',
    email: 'alicia.smith@example.com'
  }))
  .then((user) => Project.create({
    name: 'Email Marketing Campaign',
    userId: user.id
  }))
  .then((project) => {
    Task.create({
      description: 'Get list of users',
      projectId: project.id
    });
    Task.create({
      description: 'Write email template',
      projectId: project.id
    });
    return Promise.resolve(project);
  })
  .then((project) => Project.create({
    name: 'Hire new developer',
    userId: project.userId
  }))
  .then((project) => {
    Task.create({
      description: 'Find candidates',
      projectId: project.id
    });
    Task.create({
      description: 'Prepare interview',
      projectId: project.id
    });
    return Promise.resolve();
  });
  
})();

