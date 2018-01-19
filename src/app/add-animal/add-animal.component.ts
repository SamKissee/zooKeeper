import { Component, OnInit } from '@angular/core';
import { Animal } from '../../animal.model'
declare var firebase: any;

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {

  fbAddAnimal(name, species, age, diet, location, caretakers, sex, likes, dislikes){
    firebase.database().ref("/").push({name: name, species: species, age: age, diet: diet, location: location, caretakers: caretakers, sex: sex, likes: likes, dislikes: dislikes})
  }

  constructor() { }

  ngOnInit() {
  }

}
