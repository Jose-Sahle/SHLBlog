import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService
{
  private baseUrl = 'http://localhost:40080/api/Posts'; // URL da API

  constructor(private http: HttpClient) { }

  listar(): Observable<Post[]>
  {
    return this.http.get<Post[]>(this.baseUrl);
  }

  criar(post: Post): Observable<Post>
  {
    return this.http.post<Post>(this.baseUrl, post);
  }
}
