// @ts-nocheck
import sequelize from '../models';
import { Resolvers } from './codegen';

const { User, Project, Task } = sequelize.models;
const resolvers: Resolvers = {
    RootQuery: {
        user(parent, { id }): any {
            return User.findByPk(id);
        },
        users(): any {
            return User.findAll();
        },
        project(parent, { id }): any {
            return Project.findByPk(id);
        },
        projects(): any {
            return Project.findAll();
        },
        task(parent, { id }): any {
            return Task.findByPk(id);
        },
        tasks(): any {
            return Task.findAll();
        },
    },

    User: {
        projects(user: any) {
            return user.getProjects();
        }
    },

    Project: {
        tasks(project: any) {
            return project.getTasks();
        }
    },

    RootMutation: {
        createUser (root, { input }) {
          return User.create(input);    
        },
        async updateUser (root, { id, input }) {
          await User.update(input, { where: { id } });
          return await User.findByPk(id);
        },
        removeUser (root, { id }, context) {
          return !! User.destroy({ where: { id } });
        },
        createProject (root, { input }) {
          return Project.create(input);    
        },
        async updateProject (root, { id, input }) {
          await Project.update(input, { where: { id } });
          return await Project.findByPk(id);
        },
        removeProject (root, { id }, context) {
          return !! Project.destroy({ where: { id } });
        },
        createTask (root, { input }) {
          return Task.create(input);    
        },
        async updateTask (root, { id, input }) {
          await Task.update(input, { where: { id } });
          return await Task.findByPk(id);
        },
        removeTask (root, { id }, context) {
          return !! Task.destroy({ where: { id } });
        },
      }
};

export default resolvers;
