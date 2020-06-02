import { Router } from 'express';
import compareController from './controllers/compare.controller';

const routes = Router();

routes.get('/', compareController.Index);
routes.post('/compare', compareController.Compare);
routes.post('/compare-mysql', compareController.CompareMysql);

export default routes;