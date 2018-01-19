import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './../animal.model';

@Pipe({
  name: 'ageSort'
})
export class AgeSortPipe implements PipeTransform {

  transform(input: Animal[], option) {
    let output = [];
    if (option === "underTwo"){
      for (let i = 0; i < input.length; i++){
        if(input[i].age <= 2){
          output.push(input[i]);
        }
      }
      return output;
    } else if (option === "overTwo"){
      for (let i = 0; i < input.length; i++){
        if(input[i].age >= 3){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
