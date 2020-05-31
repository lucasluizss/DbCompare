import { Router } from 'express';
import compareController from './controllers/compare.controller';

const routes = Router();

routes.post('/compare', compareController.Compare);

export default routes;