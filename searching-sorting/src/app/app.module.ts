import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { SortViewComponent } from './components/sort-view/sort-view.component';

import { FormsModule } from '@angular/forms';
import { AnimateDirective } from './directives/animate.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchViewComponent,
    SortViewComponent,
    AnimateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
