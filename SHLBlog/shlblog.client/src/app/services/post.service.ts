import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService
{
  private baseUrl = environment.baseUrl + "api/Post"; // URL da API

  constructor(private http: HttpClient) { }

  listar(): Observable<Post[]>
  {
    var urladdress: string = `${this.baseUrl}/listar`;

    return this.http.get<Post[]>(urladdress);
  }

  criar(post: Post): Observable<Post>
  {
    var urladdress: string = `${this.baseUrl}/criar`;

    post.PostId = 0;
    post.UserId = 1;

    return this.http.post<Post>(urladdress, post);
  }
}
