import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QueryResultsComponent } from './query-results/query-results.component';
import { QueryParametersComponent } from './query-parameters/query-parameters.component';
import { SelectedQueryResultComponent } from './selected-query-result/selected-query-result.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryResultsComponent,
    QueryParametersComponent,
    SelectedQueryResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
