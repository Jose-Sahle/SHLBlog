import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  private baseUrl = environment.baseUrl + "api/Auth";

  constructor(private http: HttpClient) { }

  login(username: string, password: string)
  {
    var urladdress: string = `${this.baseUrl}/login`;

    var params = new HttpParams()
      .set("Username", username)
      .set("Password", password);

    var retorno = this.http.post<boolean>(urladdress, null, { params });

    return retorno;
  }

  register(username: string, password: string)
  {
    var urladdress: string = `${this.baseUrl}/register`;

    var params = new HttpParams()
      .set("Username", username)
      .set("Password", password);

    var retorno = this.http.post<boolean>(urladdress, null, { params });

    return retorno;
  }
}
