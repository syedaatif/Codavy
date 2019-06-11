import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainBlogsComponent } from './maintain-blogs.component';

describe('MaintainBlogsComponent', () => {
  let component: MaintainBlogsComponent;
  let fixture: ComponentFixture<MaintainBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
