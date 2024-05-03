import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent
{
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register()
  {
    this.authService.register(this.username, this.password).subscribe(
      {
        next: (response) =>
        {
          console.log('Usuário registrado com sucesso', response);
          this.router.navigate(['/']);
        },
        error: (error) =>
        {
          console.error('Registro falhou', error);
        }
      });
  }
}
