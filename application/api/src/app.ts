import 'reflect-metadata';
import cors from 'cors';
import routes from './routes';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import documentation from './documentation.json';

class App {
	public express: express.Application;

	constructor() {
		this.express = express();
		this.middlewares();
		this.swagger();
		this.routes();
	}

	private middlewares(): void {
		this.express.use(express.json());
		this.express.use(cors());
	}

	private swagger(): void {
		this.express.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentation));
	}

	private routes(): void {
		this.express.use(routes);
	}
}

export default new App().express;
