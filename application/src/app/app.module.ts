import { Interceptor } from './core/http.interceptor';
import { OracleService } from './services/database-oracle.service.ts.service';
import { SqlServerService } from './services/database-sqlserver.service';
import { MySqlService } from './services/database-mysql.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MySqlService,
    SqlServerService,
    OracleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
