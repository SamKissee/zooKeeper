import { Component, OnInit } from '@angular/core';
import { Animal } from './../animal.model';
import { HttpService } from './http.service';
declare var firebase: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ HttpService ]
})
export class AppComponent {
  title = 'Zoo Keeper';

  constructor(private httpService: HttpService){}

  masterAnimalList = [];

  ngOnInit(){
    this.fbGetAnimals();
  }

  fbGetAnimals(){
    firebase.database().ref('/').on('child_added',
    (snapshot) => this.masterAnimalList.push(snapshot.val())
    )
  }

  selectedAnimal = null;
  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal
  }
  doneEdit(){
    this.selectedAnimal = null;
  }

}
