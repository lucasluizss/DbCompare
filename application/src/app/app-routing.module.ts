import { SqlServerService } from './services/database-sqlserver.service';
import { OracleService } from './services/database-oracle.service.ts.service';
import { MySqlService } from './services/database-mysql.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    MySqlService,
    OracleService,
    SqlServerService
  ]
})
export class AppRoutingModule { }
