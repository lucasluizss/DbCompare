import { DatabaseConnection } from './../data/models/database-connection.model';
import { EDatabaseType } from './../data/enums/database-type.enum';
import { IDatabaseService } from './interfaces/database-service.interface';
import { Injectable } from '@angular/core';
import { MySql } from 'mysql';

@Injectable({
  providedIn: 'root'
})
export class MySqlService implements IDatabaseService {

  public code: EDatabaseType = EDatabaseType.MySql;
  private responseList: any;

  constructor() { }

  public execute(connectionList: DatabaseConnection[]): any {
    console.log(`executing ${this.code}`);

    for (const item of connectionList) {
      console.log(item);

      const connection = MySql.createConnection({
        host: item.Hostname,
        user: item.Username,
        password: item.Password,
        database: item.Database
      });

      connection.connect((error: any) => {
        if (error) {
          throw error;
        }

        connection.query(`
          SELECT
            T.TABLE_NAME,
            C.COLUMN_NAME,
            c.DATA_TYPE
          FROM INFORMATION_SCHEMA.TABLES T
            INNER JOIN INFORMATION_SCHEMA.COLUMNS C ON C.TABLE_NAME = T.TABLE_NAME
          WHERE
            T.TABLE_TYPE = 'BASE TABLE'
          ORDER BY t.TABLE_NAME;`,
        (error: any, result: any) => {
          if (error) {
            throw error;
          }

          console.log(result);
          this.responseList.push(result);
        });
      });
    }

    return this.responseList;
  }
}
