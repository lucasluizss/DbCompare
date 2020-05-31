import { Request, Response } from 'express';
import CompareService from '../services/compare.service';

class CompareController {

	constructor() { }

	public async compare(request: Request, response: Response): Promise<Response> {
		const  { connections } = request.body;

		return response.json(CompareService.execute(connections));
	}
}

export default new CompareController();