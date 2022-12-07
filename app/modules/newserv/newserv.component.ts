import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newserv',
  templateUrl: './newserv.component.html',
  styleUrls: ['./newserv.component.scss'],
})
export class NewservComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  servicio () {

    this.router.navigate (["/serv"])

  }
}
