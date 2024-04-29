import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent
{
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login()
  {
    this.authService.login(this.username, this.password).subscribe(
    {
      next: (response) =>
      {
        console.log('Login bem-sucedido', response);
      },
      error: (error) =>
      {
        console.error('Login falhou', error);
      }
    });
  }
}
