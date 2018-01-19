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
    firebase.database().ref("/").push({Name: name, Species: species, Age: age, Diet: diet, Location: location, Caretakers: caretakers, Sex: sex, Likes: likes, Dislike: dislikes})
  }

  constructor() { }

  ngOnInit() {
  }

}
