import { Component, OnInit, ViewChild, ElementRef, OnChanges , AfterViewInit, QueryList, ViewChildren, Directive} from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { CommonService } from './common.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  providers: [CommonService]
})
@Directive({
  selector: '[runDummyFunc]'
})
export class BlogsComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('view0', { read: ElementRef, static: false }) view0:ElementRef;
  @ViewChildren('items') items: QueryList<ElementRef>;

  public allBlogs: IBlogs = {blogs:[{title: "", description: "", date: "" , content: ""}]};
 
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

  ngOnInit() {
    console.log(this.Repdata);
    this.newService.GetUser().subscribe(data => {this.Repdata = data;
      console.log(this.Repdata);
            if (this.Repdata !== undefined) {
        this.Repdata.forEach((element, i) => {
          this.allBlogs.blogs[i] = {title: "", description: "", date: "" , content: ""};
          this.allBlogs.blogs[i].title = element.title ;
          console.log(this.allBlogs.blogs[i].title + ''+ element.title );
          this.allBlogs.blogs[i].date = element.date ;
          this.allBlogs.blogs[i].description = element.description;
          this.allBlogs.blogs[i].content = element.content;
          }); 
      }
    });
    
    // this.allBlogs.blogs[0] = {title: 'First Post', description: 'hello this post is post 1', date: '8' ,content: '<button>post1</button>'};
    // this.allBlogs.blogs[1] = {title: 'Second Post', description: 'hello this post is post 2', date: '9' ,content: '<button>post2</button>'};
    // this.allBlogs.blogs[2] = {title: 'Third Post', description: 'hello this post is post 3', date: '10' ,content: '<button>post3</button>'};
  }

ngOnChanges() {
  this.newService.GetUser().subscribe(data => {this.Repdata = data;
    if (this.Repdata !== undefined) {
      this.Repdata.forEach((element, i) => {
        this.allBlogs.blogs[i] = {title: "", description: "", date: "" , content: ""};
        this.allBlogs.blogs[i].title = element.title ;
        console.log(this.allBlogs.blogs[i].title + ''+ element.title );
        this.allBlogs.blogs[i].date = element.date ;
        this.allBlogs.blogs[i].description = element.description;
        this.allBlogs.blogs[i].content = element.content;
        }); 
    }
   
    console.log(this.Repdata);
  });
}

  ngAfterViewInit() {
   
  // this.view0.nativeElement.innerHTML = this.allBlogs.blogs[0].content;
    //  this.divContent.nativeElement.innerHTML = this.allBlogs.blogs[0].content; 
  this.allBlogs.blogs.forEach((element, i) => {
    this.items.toArray()[i].nativeElement.innerHTML = this.allBlogs.blogs[i].content;
    }); 
   
    
    
  }
 


}
