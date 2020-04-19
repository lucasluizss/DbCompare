import { Component } from '@angular/core';
import { DatabaseConnection } from './models/database-connection.model';
declare var UIkit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'DbCompare';

  public databaseType: string;
  public totalComparisons: number;
  public connectionList = new Array<DatabaseConnection>(0);

  public generateForm(): void {
    if (!this.totalComparisons) {
      UIkit.modal.alert(`Total of comparisons must be grather than 2!`);
      return;
    }

    this.connectionList = new Array<DatabaseConnection>(0);

    for (let i = 0; i < this.totalComparisons; i++) {
      this.connectionList.push(new DatabaseConnection());
    }
  }

  public execute(): void {
    UIkit.modal.alert(`Total of comparisons: ${this.totalComparisons}`);
  }
}
