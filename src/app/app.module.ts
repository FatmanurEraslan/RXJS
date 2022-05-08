import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FromComponent } from './from/from.component';
import { SchedularComponent } from './schedular/schedular.component';

@NgModule({
  declarations: [
    AppComponent,
    FromComponent,
    SchedularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
