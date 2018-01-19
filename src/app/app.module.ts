import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';

import { Animal } from './../animal.model'


@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    AddAnimalComponent,
    EditAnimalComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
