import express, {Application} from 'express';
import morgan from 'morgan';

const app: Application = express();

import authRoutes from './routes/auth'

app.set('port',4000);

app.use(authRoutes)
export default app;