import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc :AuthService, private router: Router) { }

  ngOnInit() {
  }

async onLogin (email, password) 
{

  try {
      const user =await this.authSvc.login (email.value, password.value);
      if (user) {
 
        
        const verified = this.authSvc.isEmailVerified(user);
        console.log('logueado',verified);
        this.redirectUser (verified);

      }else {

        Swal.fire('Has Ingresado mal tus datos')
      }

  }

  catch (error){console.log ('Error', error)}

}


async onLoginGoole (email, password){

  try {
      const user =await this.authSvc.logingGoogle();
      if (user){
        const verified = this.authSvc.isEmailVerified(user);
        console.log('Verificado',verified)
        this.redirectUser (verified);


      }

  }

  catch (error){console.log ('Error',error)}
}

 private redirectUser (isVerified:boolean) {
   if (isVerified){
    this.router.navigate (['admin']);
   }
   else {
    this.router.navigate(['verify-page']);

   }

   }
 

 

}
