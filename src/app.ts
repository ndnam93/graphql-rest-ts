import express from 'express';
import routes from './routes/index';

const app = express();
app.use('/api', routes);

app.listen(3000);
