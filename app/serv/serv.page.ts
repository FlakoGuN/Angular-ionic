import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-serv',
  templateUrl: './serv.page.html',
  styleUrls: ['./serv.page.scss'],
})
export class ServPage implements OnInit {

  constructor(private authSvc: AuthService ) { }
  user$: Observable<User> = this.authSvc.afAuth.user;
  ngOnInit() {
  }

}
