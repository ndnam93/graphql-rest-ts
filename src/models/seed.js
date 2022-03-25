
// Add some data in the database
export default function (sequelize) {
  const { User, Project, Task } = sequelize.models;

  User.create({
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com'
  })
  .then((user) => Project.create({
    name: 'Migrate from REST to GraphQL',
    UserId: user.id
  }))
  .then((project) => {
    Task.create({
      description: 'Read tutorial',
      ProjectId: project.id
    });
    Task.create({
      description: 'Start coding',
      ProjectId: project.id
    });
    return Promise.resolve(project);
  })
  .then((project) => Project.create({
    name: 'Create a blog',
    UserId: project.UserId
  }))
  .then((project) => {
    Task.create({
      description: 'Write draft of article',
      ProjectId: project.id
    });
    Task.create({
      description: 'Set up blog platform',
      ProjectId: project.id
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
    UserId: user.id
  }))
  .then((project) => {
    Task.create({
      description: 'Get list of users',
      ProjectId: project.id
    });
    Task.create({
      description: 'Write email template',
      ProjectId: project.id
    });
    return Promise.resolve(project);
  })
  .then((project) => Project.create({
    name: 'Hire new developer',
    UserId: project.UserId
  }))
  .then((project) => {
    Task.create({
      description: 'Find candidates',
      ProjectId: project.id
    });
    Task.create({
      description: 'Prepare interview',
      ProjectId: project.id
    });
    return Promise.resolve();
  });
}
