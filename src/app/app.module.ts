import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { AgeSortPipe } from './age-sort.pipe';




@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    AddAnimalComponent,
    EditAnimalComponent,
    AgeSortPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
