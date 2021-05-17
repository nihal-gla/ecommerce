import { Component, OnInit} from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-explore-diamond',
  templateUrl: './explore-diamond.component.html',
  styleUrls: ['./explore-diamond.component.css']
})
export class ExploreDiamondComponent  implements OnInit  {

  constructor() { }

  ngOnInit(): void {
  }

  public lowValue: number = 5000;
  public highValue: number = 50000;
  options: Options = {
    floor: 5000,
    ceil: 50000
  };

  public lowCarat: number = 5000;
  public highCarat: number = 50000;
  options01: Options = {
    floor: 5000,
    ceil: 50000
  };

  public lowCut: number = 1;
  public highCut: number = 5;
  options02: Options = {
    showTicksValues: true,
    step: 5,
    showTicks: true,
    stepsArray: [
      { value: 1,},
      { value: 2,},
      { value: 3,},
      { value: 4,},
      { value: 5,}
    ]
  };

  public lowColor: number = 1;
  public highColor: number = 9;
  options03: Options = {
    showTicksValues: true,
    step: 9,
    showTicks: true,
    stepsArray: [
      { value: 1,},
      { value: 2,},
      { value: 3,},
      { value: 4,},
      { value: 5,},
      { value: 6,},
      { value: 7,},
      { value: 8,},
      { value: 9,},
    ]
  };

  public lowClarity: number = 1;
  public highClarity: number = 9;
  options04: Options = {
    showTicksValues: true,
    step: 9,
    showTicks: true,
    stepsArray: [
      { value: 1,},
      { value: 2,},
      { value: 3,},
      { value: 4,},
      { value: 5,},
      { value: 6,},
      { value: 7,},
      { value: 8,},
      { value: 9,}
    ]
  };

  public lowPolish: number = 1;
  public highPolish: number = 4;
  options05: Options = {
    showTicksValues: true,
    step: 4,
    showTicks: true,
    stepsArray: [
      { value: 1,},
      { value: 2,},
      { value: 3,},
      { value: 4,},
    ]
  };

  status: boolean = true;
  clickEvent(){
    this.status = !this.status;
  }
  status0: boolean = true;
  clickEvent1(){
    this.status0 = !this.status0;
  }
  status1: boolean = true;
  clickEvent2(){
    this.status1 = !this.status1;
  }
  status2: boolean = true;
  clickEvent3(){
    this.status2 = !this.status2;
  }
  status3: boolean = false;
  clickEvent4(){
    this.status3 = !this.status3;
  }
  status4: boolean = false;
  clickEvent5(){
    this.status4 = !this.status4;
  }
  status5: boolean = false;
  clickEvent6(){
    this.status5 = !this.status5;
  }

}
