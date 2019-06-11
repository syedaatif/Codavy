import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogsComponent} from '../app/blogs/blogs.component'
import {AddBlogComponent} from '../app/add-blog/add-blog.component';
import {MaintainBlogsComponent} from '../app/maintain-blogs/maintain-blogs.component';

const routes: Routes = [
  { path: 'blogs', component: BlogsComponent },
  { path: '', component: BlogsComponent },
  { path: 'maintainblogs', component: MaintainBlogsComponent },
  { path: 'addblogs', component: AddBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
