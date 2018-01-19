import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../../animal.model'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  @Input() childAnimalList;
  @Output() clickSender = new EventEmitter();

  editButton1(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
