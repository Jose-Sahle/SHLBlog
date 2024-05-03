import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post, PostDTO } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService
{
  private baseUrl = environment.baseUrl + "api/Post"; // URL da API

  constructor(private http: HttpClient) { }

  listar(): Observable<PostDTO[]>
  {
    var urladdress: string = `${this.baseUrl}/listar`;
    const headers = { 'content-type': 'application/json' }

    return this.http.get<PostDTO[]>(urladdress, { 'headers': headers });
  }

  criar(post: Post): Observable<Post>
  {
    var urladdress: string = `${this.baseUrl}/criar`;

    post.PostId = 0;
    post.UserId = 1;

    return this.http.post<any>(urladdress, post);
  }
}
