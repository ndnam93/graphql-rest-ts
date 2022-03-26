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
};

export default resolvers;
