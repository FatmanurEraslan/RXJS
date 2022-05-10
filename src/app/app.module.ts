import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FromComponent } from './from/from.component';
import { SchedularComponent } from './schedular/schedular.component';
import { AjaxComponent } from './ajax/ajax.component';
import { BindCallBackComponent } from './bind-call-back/bind-call-back.component';
import { DeferComponent } from './defer/defer.component';

@NgModule({
  declarations: [
    AppComponent,
    FromComponent,
    SchedularComponent,
    AjaxComponent,
    BindCallBackComponent,
    DeferComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
