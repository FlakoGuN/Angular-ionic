import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit() {
  }

 Salir () {

  this.authSvc.logout();
  this.router.navigate (['/home']);
 }

}
