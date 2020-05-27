import { DatabaseConnection } from './../../data/models/database-connection.model';
import { EDatabaseType } from './../../data/enums/database-type.enum';

export interface IDatabaseService {
	code: EDatabaseType;
	execute(connectionList: Array<DatabaseConnection>): any;
}
