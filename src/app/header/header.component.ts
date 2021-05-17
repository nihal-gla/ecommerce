import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, Routes, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public routeCtrl: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.routeCtrl.navigate(['/login']);
  }
}
