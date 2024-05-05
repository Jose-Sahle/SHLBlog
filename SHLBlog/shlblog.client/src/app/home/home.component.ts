import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostDTO } from '../models/post';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { WebSocketService } from '../services/websocket.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy
{
  count = 0;
  posts?: PostDTO[] = [];
  messages: string[] = [];

  constructor(private postService: PostService, private websocketService: WebSocketService)
  {
  }

  ngOnInit(): void
  {
    var urladdress: string = "wss://localhost:40443/"  + "ws";
    this.websocketService.connect(urladdress);

    this.websocketService.getMessages().subscribe(message =>
    {
      this.count++;
      this.messages.push(message);
    });

    this.loadPosts();
  }

  ngOnDestroy(): void
  {
    this.websocketService.disconnect();
  }

  loadPosts()
  {
    this.postService.listar().subscribe(result =>
    {
      this.count = 0;
      this.posts = result;
    }, error =>
    {
      console.error('Error fetching posts:', error);
    });
  }
}
