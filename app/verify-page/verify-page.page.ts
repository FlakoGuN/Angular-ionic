import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-verify-page',
  templateUrl: './verify-page.page.html',
  styleUrls: ['./verify-page.page.scss'],
})
export class VerifyPagePage implements OnInit {
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor( private authSvc: AuthService) { }
 
  ngOnInit() {
  }

 async onSendEmail (): Promise <void> {
  
 try{
   await this.authSvc.sendVerificationEmail();

  } catch (error) {console.log ('Error', error)}
}

ngOnDestroy ():void {

this.authSvc.logout ();

}

}
