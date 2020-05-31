import { Request, Response } from 'express';
import CompareService from '../services/compare.service';

class CompareController {

	constructor() { }

	public async Compare(request: Request, response: Response): Promise<Response> {
		const  { dbType, connections } = request.body;

		return response.json(CompareService.execute(connections, dbType));
	}

	public async CompareMysql(request: Request, response: Response): Promise<Response> {
		const  { connections } = request.body;

		return response.json(CompareService.execute(connections));
	}

	public async CompareSqlServer(request: Request, response: Response): Promise<Response> {
		const  { connections } = request.body;

		return response.json(CompareService.execute(connections));
	}

	public async CompareOracle(request: Request, response: Response): Promise<Response> {
		const  { connections } = request.body;

		return response.json(CompareService.execute(connections));
	}

	public async CompareMongo(request: Request, response: Response): Promise<Response> {
		const  { connections } = request.body;

		return response.json(CompareService.execute(connections));
	}
}

export default new CompareController();