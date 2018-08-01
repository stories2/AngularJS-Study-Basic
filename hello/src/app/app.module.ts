import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TextBlueDirective } from './text-blue.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TextBlueDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
