import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostEditorComponent } from './components/post-editor/post-editor.component';

const routes: Routes =
  [
      { path: '', component: HomeComponent, pathMatch: 'full' }
    , { path: 'login', component: LoginComponent }
    , { path: 'register', component: RegisterComponent }
    , { path: 'post-editor', component: PostEditorComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
