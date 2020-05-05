import { DatabaseConnection } from './../data/models/database-connection.model';
import { EDatabaseType } from './../data/enums/database-type.enum';
import { IDatabaseService } from './interfaces/database-service.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySqlService implements IDatabaseService {

  public code: EDatabaseType = EDatabaseType.MySql;

  constructor() { }

  public execute(connectionList: DatabaseConnection[]): any {
    console.log(`executing ${this.code}`);

    for (const item of connectionList) {
      console.log(item);
    }

    return [];
  }
}
