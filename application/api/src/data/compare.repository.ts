import { Connection } from './models/connection.model';
import mysql from 'mysql';
import Scripts from './scripts';

class CompareRepository {

	execute({ host, port, user, password, database }: Connection): any {
		let response: any;
		const connection = mysql.createConnection({ host: `${host}:${port}`, user, password, database });
		connection.connect();

		connection.query(Scripts.Query(database), (error: any, results: any, fields: any) => {
			if (error) {
				console.error(`==> Erro: ${error}`)
				throw error;
			}

			response = results;
		});

		connection.end();

		return response;
	}
}

export default new CompareRepository();
