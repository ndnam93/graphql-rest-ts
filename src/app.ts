import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import logger from 'morgan';
import routes from './routes/index';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import sequelize from './models';

(async () => {
    await sequelize.sync();
    
    const app = express();
    app.use(logger('dev'));
    app.use('/api', routes);
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    });
    await server.start();
    server.applyMiddleware({ app });
    httpServer.listen({ port: 3000 });
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
})();


