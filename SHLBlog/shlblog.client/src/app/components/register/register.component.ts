import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent
{
  username: string = '';
  password: string = '';

  register()
  {
    console.log('Registrando:', this.username, this.password);
    // Aqui você adicionaria a lógica para enviar os dados para o servidor
  }
}
