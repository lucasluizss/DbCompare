import { EDatabaseType } from './data/enums/database-type.enum';
import { OracleService } from './services/database-oracle.service.ts.service';
import { MySqlService } from './services/database-mysql.service';
import { SqlServerService } from './services/database-sqlserver.service';
import { DatabaseConnection } from './data/models/database-connection.model';
import { Component } from '@angular/core';
declare var UIkit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'DbCompare';

  constructor(
    private mySqlService: MySqlService,
    private sqlServerService: SqlServerService,
    private oracleService: OracleService
  ) { }

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

    switch (+this.databaseType) {
      case EDatabaseType.MySql:
        this.response = await this.mySqlService.execute(this.connectionList).toPromise();
        break;
      case EDatabaseType.SqlServer:
        this.response = await this.sqlServerService.execute(this.connectionList).toPromise();
        break;
      case EDatabaseType.Oracle:
        this.response = await this.oracleService.execute(this.connectionList).toPromise();
        break;
    }

    UIkit.modal.alert(`Total of comparisons: ${this.totalComparisons}\n${JSON.stringify(this.connectionList)}`);
  }
}
