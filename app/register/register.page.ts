import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }



  async onRegister (email, password){
  
    try{
   const user = await this.authSvc.register(email.value, password.value)
   if (user){
     console.log ('Usuario', user);
     const isVerified = this.authSvc.isEmailVerified (user);
     this.redirectUser(isVerified);
   }else {

    Swal.fire('Ingresa un correo Valido o contraseña')
   }

    }

    catch(error) {console.log('Error', error)}

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
