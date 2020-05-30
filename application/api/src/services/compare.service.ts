import { Connection } from './../data/models/connection.model';
import CompareRepository from '../data/compare.repository'

class CompareService {

	public execute(connections: Array<Connection>): any {
		const response = new Array<any>();

		for (const connection of connections) {
			response.push(CompareRepository.execute(connection));
		}

		return response;
	}
}

export default new CompareService();