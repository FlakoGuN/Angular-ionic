import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-page',
  templateUrl: './forgot-page.page.html',
  styleUrls: ['./forgot-page.page.scss'],
})
export class ForgotPagePage implements OnInit {

  constructor( private authSvc: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  async onResetPassword (email) {
console.log('Email', email.value)
  
try{

  await this.authSvc.resetPassword(email.value);
  this.router.navigate (['/login']);
  Swal.fire('Correo Enviado')

}

catch (error){Swal.fire('Ingresa un correo Valido'), console.log ('Errorsote',error)}

  }
}
