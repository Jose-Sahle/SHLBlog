import { Component, OnInit } from '@angular/core';
import { PostDTO } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit
{
  posts?: PostDTO[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void
  {
    this.loadPosts();
  }

  loadPosts()
  {
    this.postService.listar().subscribe(result =>
    {
      this.posts = result;
    }, error =>
    {
      console.error('Error fetching posts:', error);
    });
  }
}
