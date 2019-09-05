import { Component, OnInit, ViewChild, ElementRef, OnChanges , AfterViewInit, QueryList, ViewChildren, Directive} from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { CommonService } from './common.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
@Directive({
  selector: '[runDummyFunc]'
})
export class BlogsComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('view0', { read: ElementRef, static: false }) view0:ElementRef;
  @ViewChildren('items') items: QueryList<ElementRef>;

  public allBlogs: IBlogs = {blogs:[{title: "", description: "", date: "" , content: "", id: "", titleImage: "", authorName: ""}]};
  public allBlogsSets = [];
  // content: "cc"
  // date: "2019-06-08T18:40:54.895Z"
  // description: "dd"
  // title: "aa1"
  // _id: "5cfc0136284b6f19404f565a"
  constructor(public newService: CommonService) {
    this.allBlogs.blogs = [];
   }
  Repdata;
  valbutton = 'Save';
  message;

  ngOnInit() {
    this.newService.GetUser().subscribe(data => {this.Repdata = data;
            if (this.Repdata !== undefined) {
        this.Repdata.forEach((element, i) => {
          this.allBlogs.blogs[i] = {title: "", description: "", date: "" , content: "", id : ""};
          this.allBlogs.blogs[i].title = element.title ;
          this.allBlogs.blogs[i].date = element.date ;
          this.allBlogs.blogs[i].description = element.description;
          this.allBlogs.blogs[i].content = element.content;
          this.allBlogs.blogs[i].id = element._id;
          this.allBlogs.blogs[i].titleImage = element.titleImage;
          this.allBlogs.blogs[i].authorName = element.authorName;
          }); 
      }
    });
    
    this.allBlogs.blogs[0] = {title: 'First Post', description: 'hello this post is post 1', date: '8' ,content: 'Hello content1', titleImage: "/assets/me.png"};
    this.allBlogs.blogs[1] = {title: 'Second Post', description: 'hello this post is post 2', date: '9' ,content: 'Hello content2', titleImage: "/assets/me.png"};
    this.allBlogs.blogs[2] = {title: 'Third Post', description: 'hello this post is post 3', date: '10' ,content: 'Hello content 3', titleImage: "/assets/me.png"};
    this.allBlogs.blogs[3] = {title: 'Fourth Post', description: 'hello this post is post 4', date: '8' ,content: 'Hello content4', titleImage: "/assets/me.png"};
    this.allBlogs.blogs[4] = {title: 'Fifth Post', description: 'hello this post is post 5', date: '9' ,content: 'Hello content5', titleImage: "/assets/me.png"};
    this.allBlogs.blogs[5] = {title: 'Sixth Post', description: 'hello this post is post 6', date: '10' ,content: 'Hello content 6', titleImage: "/assets/me.png"};
    let count = 0;
    let triplets = [];
    let numberOfBlogs = this.allBlogs.blogs.length;
    this.allBlogs.blogs.forEach((blog,index) => {
      console.log(count);
      // if(triplets.length === 3) {
      //   triplets.push(blog);
      // }
      if(count <3) {
        
        triplets.push(blog);
        count= count+1;
      } 
      if(count === 3) {
        console.log(triplets);
        this.allBlogsSets.push(triplets);
        count = 0;
        triplets = [];
      }
      if(numberOfBlogs % 3 === 1 && index === numberOfBlogs -2 ) {
        this.allBlogsSets.push([this.allBlogs.blogs[numberOfBlogs - 1]]);
      }
      if(numberOfBlogs % 3 === 2 && index === numberOfBlogs -1 ) {
        this.allBlogsSets.push([this.allBlogs.blogs[numberOfBlogs - 2], this.allBlogs.blogs[numberOfBlogs -1]]);
      }
      
     
    });
    console.log(this.allBlogsSets);
  }

  selectedBlog(blog) {
this.newService.activeBlogStore(blog);
console.log(this.newService.activeBlogRetrieve());
  }


ngOnChanges() {
  this.newService.GetUser().subscribe(data => {this.Repdata = data;
    if (this.Repdata !== undefined) {
      this.Repdata.forEach((element, i) => {
        this.allBlogs.blogs[i] = {title: "", description: "", date: "" , content: "", id: ""};
        this.allBlogs.blogs[i].title = element.title ;
        console.log(this.allBlogs.blogs[i].title + ''+ element.title );
        this.allBlogs.blogs[i].date = element.date ;
        this.allBlogs.blogs[i].description = element.description;
        this.allBlogs.blogs[i].content = element.content;
        this.allBlogs.blogs[i].titleImage = element.titleImage;
        this.allBlogs.blogs[i].authorName = element.authorName;
        }); 
    }
   
    console.log(this.Repdata);
  });
}

  ngAfterViewInit() {
   
  // this.view0.nativeElement.innerHTML = this.allBlogs.blogs[0].content;
    //  this.divContent.nativeElement.innerHTML = this.allBlogs.blogs[0].content; 
  // this.allBlogs.blogs.forEach((element, i) => {
  //   this.items.toArray()[i].nativeElement.innerHTML = this.allBlogs.blogs[i].content;
   // }); 
   
    
    
  }
 


}
