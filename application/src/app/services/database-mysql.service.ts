import { EDatabaseType } from './../data/enums/database-type.enum';
import { IDatabaseService } from './interfaces/database-service.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySqlService implements IDatabaseService {

  public code: EDatabaseType = EDatabaseType.MySql;

  constructor() { }

  public execute(): any {
		console.log(`executing ${this.code}`);
  }
}
