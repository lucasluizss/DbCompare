import { Request, Response } from 'express';
import CompareService from '../services/compare.service';

class DbController {

	constructor() { }

	public async compare(request: Request, response: Response): Promise<Response> {
		return response.json(CompareService.execute());
	}

	public async teste(request: Request, response: Response): Promise<Response> {
		return response.json(CompareService.execute());
	}
}

export default new DbController();