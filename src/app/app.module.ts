import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';

// import { HttpClientModule } from '@angular/common/http';

import { FilesListComponent } from './components/files-list/files-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableDetailsComponent } from './components/table-details/table-details.component';
import { TablesListComponent } from './components/tables-list/tables-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesListComponent,
    TablesListComponent,
    TableDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
