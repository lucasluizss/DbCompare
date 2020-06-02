import { DatabaseConnection } from './../data/models/database-connection.model';
import { EDatabaseType } from './../data/enums/database-type.enum';
import { IDatabaseService } from './interfaces/database-service.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MySqlService implements IDatabaseService {

  public code: EDatabaseType = EDatabaseType.MySql;

  constructor(private readonly http: HttpClient) { }

  public execute(connectionList: DatabaseConnection[]): Observable<any> {
    return this.http.post(`/compare-mysql`, connectionList);
  }
}
