import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) { }

  login()
  {
    this.authService.login(this.username, this.password).subscribe(
    {
      next: (response) =>
      {
        console.log('Login bem-sucedido', response);
        this.router.navigate(['/']);
      },
      error: (error) =>
      {
        console.error('Login falhou', error);
      }
    });
  }
}
