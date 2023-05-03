import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiRestPipe } from './api-rest.pipe';
import { ApiUserComponent } from './api-user/api-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiRestPipe,
    ApiUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
