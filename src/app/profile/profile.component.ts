import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  hide = true;
  hide0 = true;
  hide1 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
