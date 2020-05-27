import { Connection } from './models/connection.model';
import mysql from 'mysql';

class CompareRepository {
	private defaultQuery = (database: string) => `
		SELECT
			T.TABLE_NAME,
			C.COLUMN_NAME,
			c.DATA_TYPE
		FROM INFORMATION_SCHEMA.TABLES T
			INNER JOIN INFORMATION_SCHEMA.COLUMNS C ON C.TABLE_NAME = T.TABLE_NAME
		WHERE
			T.TABLE_TYPE = 'BASE TABLE' AND T.TABLE_SCHEMA = ${database}
		ORDER BY t.TABLE_NAME;
	`;

	execute({ host, user, password, database }: Connection): any {
		let response: any;
		const connection = mysql.createConnection({ host, user, password, database });
		connection.connect();

		connection.query(this.defaultQuery(database), (error: any, results: any, fields: any) => {
			if (error) {
				throw error;
			}

			response = results;
		});

		connection.end();

		return response;
	}
}

export default new CompareRepository();
