import { DatabaseConnection } from './../data/models/database-connection.model';
import { EDatabaseType } from './../data/enums/database-type.enum';
import { IDatabaseService } from './interfaces/database-service.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MySqlService implements IDatabaseService {

  public code: EDatabaseType = EDatabaseType.MySql;
  private responseList: any;

  constructor(private readonly http: HttpClient) { }

  public execute(connectionList: DatabaseConnection[]): any {
    console.log(`executing ${this.code.toString()}`);
  }
}
