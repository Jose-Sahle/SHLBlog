import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrl: './post-editor.component.scss'
})
export class PostEditorComponent implements OnInit
{
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router)
  {
    this.postForm = this.fb.group({
      Title: ['', Validators.required],
      Content: ['', Validators.required]
    });
  }

  ngOnInit(): void
  {
  }

  onSubmit()
  {
    if (this.postForm.valid)
    {
      this.postService.criar(this.postForm.value).subscribe({
        next: (result) =>
        {
          console.log('Post criado com sucesso', result);
          this.router.navigate(['/']);
        },
        error: (error) => console.error('Falha ao criar post', error)
      });
    }
  }
}
