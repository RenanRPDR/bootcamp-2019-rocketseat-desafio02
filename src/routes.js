import { Router } from 'express';

import SessionControler from './app/controllers/SessionController';
import StudentsController from './app/controllers/StudentsController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/sessions', SessionControler.store);

routes.use(authMiddleware);

routes.post('/students', StudentsController.store);
routes.put('/students', StudentsController.update);

export default routes;
