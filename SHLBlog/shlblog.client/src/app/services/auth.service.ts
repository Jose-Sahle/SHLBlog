import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{

  private baseUrl = 'http://localhost:40080/api/Auth';
  //private baseUrl = 'api/Auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string)
  {
    var urladdress: string = `${this.baseUrl}/login`;

    var params = new HttpParams()
      .set("Username", username)
      .set("Password", password);

    var retorno = this.http.post<boolean>(urladdress, params);

    return retorno;
  }

  register(username: string, password: string)
  {
    var urladdress: string = `${this.baseUrl}/register`;

    var params = new HttpParams()
      .set("Username", username)
      .set("Password", password);

    var retorno = this.http.post<boolean>(urladdress, params);

    return retorno;
  }
}
