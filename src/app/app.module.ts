import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewActivityComponent } from './new-activity/new-activity.component';
import { ActivityListComponent } from './activity-list/activity-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewActivityComponent,
    ActivityListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
