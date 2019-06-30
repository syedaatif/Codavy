import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { BlogsComponent } from './blogs/blogs.component';
import { CommonService } from './blogs/common.service';
import {HttpModule} from '@angular/http';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { QuillModule } from 'ngx-quill';
import { MaintainBlogsComponent } from './maintain-blogs/maintain-blogs.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    AddBlogComponent,
    MaintainBlogsComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    QuillModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
