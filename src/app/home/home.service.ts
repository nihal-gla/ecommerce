import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {
  }
  
     getName(){
      console.log({name:"sarthak"});
    }

}
