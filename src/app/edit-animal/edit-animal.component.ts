import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../../animal.model'

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent implements OnInit {
  @Input() childSelectedAnimal: Animal;
  @Output() doneClickSender = new EventEmitter();

  doneClicked(){
    this.doneClickSender.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
