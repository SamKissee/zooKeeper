import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  fetchAnimals(){
    return this.http.get("./../assets/animals.json");
  }
}
