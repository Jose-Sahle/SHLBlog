import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrl: './post-editor.component.scss'
})
export class PostEditorComponent implements OnInit
{
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService)
  {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
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
        next: (result) => console.log('Post criado com sucesso', result),
        error: (error) => console.error('Falha ao criar post', error)
      });
    }
  }
}
