import { Component, OnInit,AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../blogs/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewBlogComponent implements OnInit {
public Repdata;
public selectedBlog;
public shareLink: string = '';
  constructor(public newService: CommonService, private route: ActivatedRoute) { }
  public allBlogs: IBlogs = {blogs:[{title: "", description: "", date: "" , content: "", id: "", titleImage: "", authorName: ""}]};
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id && id.length > 0) {
      this.newService.GetUser().subscribe(data => {
        console.log(data);
        data.forEach((element, i) => { 
          console.log(id.replace(/ /g, ""), element.title);
          if(element.title.replace(/ /g, "") === id.replace(/ /g, "")) {
                this.selectedBlog = element;
                document.getElementById("blogContent").innerHTML = this.selectedBlog.content;
          }
        });
       });
    } else {
     this.selectedBlog = this.newService.activeBlogRetrieve();
     document.getElementById("blogContent").innerHTML = this.selectedBlog.content;
    }
   
    console.log(this.selectedBlog);
    
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
  public generateLink() {
   this.shareLink  = 'https://www.codavy.com/viewblog/' + this.selectedBlog.title.replace(/ /g, "") ;
  }

}
