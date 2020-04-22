import { EDatabaseType } from './../../data/enums/database-type.enum';

export interface IDatabaseService {
	code: EDatabaseType;
	execute(): any;
}
