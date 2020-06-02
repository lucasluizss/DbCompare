import { EDatabaseType } from './data/enums/database-type.enum';
import { OracleService } from './services/database-oracle.service.ts.service';
import { MySqlService } from './services/database-mysql.service';
import { SqlServerService } from './services/database-sqlserver.service';
import { DatabaseConnection } from './data/models/database-connection.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
declare var UIkit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'DbCompare';
  private commands: any;

  constructor(
    private readonly mySqlService: MySqlService,
    private readonly sqlServerService: SqlServerService,
    private readonly oracleService: OracleService
  ) {
    this.commands = [
      { Key: EDatabaseType.MySql, Value: (x: any) => mySqlService.execute(x) },
      { Key: EDatabaseType.SqlServer, Value: (x: any) => sqlServerService.execute(x) },
      { Key: EDatabaseType.Oracle, Value: (x: any) => oracleService.execute(x) },
    ];
  }

  public databaseType: EDatabaseType;
  public totalComparisons: number;
  public connectionList = new Array<DatabaseConnection>(0);
  public response: any;

  public generateForm(): void {
    if (!this.totalComparisons && this.totalComparisons < 2) {
      UIkit.modal.alert(`Total of comparisons must be grather than 2!`);
      return;
    }

    this.connectionList = new Array<DatabaseConnection>(0);

    for (let i = 0; i < this.totalComparisons; i++) {
      this.connectionList.push(new DatabaseConnection());
    }
  }

  public async execute(): Promise<void> {
    this.response = await this.Invoke(+this.databaseType).toPromise();

    console.log('Response: ', this.response);

    UIkit.modal.alert(`Total of comparisons: ${this.totalComparisons}\n${JSON.stringify(this.connectionList)}`);
  }

  private Invoke(dbType: EDatabaseType): Observable<any> {
    return (this.commands.find(c => c.Key === dbType).Value)(this.connectionList);
  }

}
