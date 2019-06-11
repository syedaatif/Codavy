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
  Repdata;
  valbutton = 'Save';

  ngOnInit() {
    this.newService.GetUser().subscribe(data => {this.Repdata = data;});
  }
  onSave = function (user, isValid: boolean) {
    user.mode = this.valbutton;
    user.date = new Date();
    this.newService.saveUser(user)
      .subscribe(data => {
        alert(data.data);

        this.ngOnInit();
      }
        , error => this.errorMessage = error)

  }
  edit = function (kk) {
    this.id = kk._id;
    this.title = kk.title;
    this.description = kk.description;
    this.content = kk.content;
    this.date = new Date();
    this.valbutton = 'Update';
  }

  delete = function (id) {
    this.newService.deleteUser(id)
      .subscribe(data => { alert(data.data); this.ngOnInit(); }, error => this.errorMessage = error)
  }

}
