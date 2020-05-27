import { Router } from 'express';
import dbController from './controllers/compare.controller';

const routes = Router();

routes.post('/compare', dbController.compare);

routes.post('/teste', dbController.teste);

export default routes;