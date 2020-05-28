import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatabaseConnection } from './../data/models/database-connection.model';
import { EDatabaseType } from './../data/enums/database-type.enum';
import { IDatabaseService } from './interfaces/database-service.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SqlServerService implements IDatabaseService {

  public code: EDatabaseType = EDatabaseType.SqlServer;

  constructor(private readonly http: HttpClient) { }

  public execute(connectionList: DatabaseConnection[]): Observable<any> {
    return this.http.post(``, connectionList);
  }
}
