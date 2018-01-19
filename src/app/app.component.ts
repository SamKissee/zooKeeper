import { Component, OnInit } from '@angular/core';
import { Animal } from './../animal.model';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ HttpService ]
})
export class AppComponent {
  title = 'Zoo Keeper';

  constructor(private httpService: HttpService){}

  masterAnimalList;

  ngOnInit(){
    this.httpService.fetchAnimals().subscribe(
      (animals) => this.masterAnimalList.push(animals)
    );
    console.log(this.masterAnimalList)
  }
}
