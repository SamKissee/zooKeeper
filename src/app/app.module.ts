import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
