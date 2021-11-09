import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridMainComponent } from './components/grid-main/grid-main.component';
import { SortMainComponent } from './components/sort-main/sort-main.component';

@NgModule({
  declarations: [
    AppComponent,
    GridMainComponent,
    SortMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
