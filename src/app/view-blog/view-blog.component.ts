import { Component, OnInit,AfterViewInit, ViewEncapsulation } from '@angular/core';
 import { CommonService } from '../blogs/common.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewBlogComponent implements OnInit {
public Repdata;
public selectedBlog;
  constructor(public newService: CommonService) { }
  public allBlogs: IBlogs = {blogs:[{title: "", description: "", date: "" , content: "", id: "", titleImage: "", authorName: ""}]};
  ngOnInit() {
    this.selectedBlog = this.newService.activeBlogRetrieve();
    console.log(this.selectedBlog);
    document.getElementById("blogContent").innerHTML = this.selectedBlog.content;
    // this.newService.currentMessage.subscribe(message => this.selectedBlog = message);
  //  this.selectedBlog = this.newService.activeBlogRetrieve();
    // this.newService.GetUser().subscribe(data => {this.Repdata = data;
    //         if (this.Repdata !== undefined) {
    //     this.Repdata.forEach((element, i) => {
    //       this.allBlogs.blogs[i] = {title: "", description: "", date: "" , content: "", id : ""};
    //       this.allBlogs.blogs[i].title = element.title ;
    //       console.log(this.allBlogs.blogs[i].title + ''+ element.title );
    //       this.allBlogs.blogs[i].date = element.date ;
    //       this.allBlogs.blogs[i].description = element.description;
    //       this.allBlogs.blogs[i].content = element.content;
    //       this.allBlogs.blogs[i].id = element._id;
    //       }); 
    //   }
    // });
  }
  trigger() {
    this.selectedBlog = this.newService.activeBlogRetrieve();
    // console.log(this.newService.activeBlogRetrieve());
  }

}
