import { Component, OnInit, ViewChild, ElementRef, OnChanges , AfterViewInit, QueryList, ViewChildren, Directive} from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { CommonService } from '../blogs/common.service';

@Component({
  selector: 'app-maintain-blogs',
  templateUrl: './maintain-blogs.component.html',
  styleUrls: ['./maintain-blogs.component.scss']
})
export class MaintainBlogsComponent implements OnInit {

  constructor(public newService: CommonService) { }
  public Repdata;
  valbutton = 'Save';

  ngOnInit() {
    this.newService.GetUser().subscribe(data => {this.Repdata = data;});
  }
  onSave = function (user, isValid?: boolean) {
    user.mode = this.valbutton;
    user.date = new Date().toString();
    console.log(user);
    this.newService.saveUser(user)
      .subscribe(data => {
        alert(data.data);

        this.ngOnInit();
      }
        , error => this.errorMessage = error)

  }
  public edit (kk) {
console.log(kk);
    this.Repdata.id = kk._id;
    this.Repdata.title = kk.title;
    this.Repdata.description = kk.description;
    this.Repdata.content = kk.content;
    this.Repdata.titleImage = kk.titleImage;
    this.Repdata.date = new Date();
    this.valbutton = 'Update';
  }

  delete = function (id) {
    this.newService.deleteUser(id)
      .subscribe(data => { alert(data.data); this.ngOnInit(); }, error => this.errorMessage = error)
  }

}
