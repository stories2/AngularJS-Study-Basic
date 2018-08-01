import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodosModule} from "./todos/todos.module";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    TodosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
