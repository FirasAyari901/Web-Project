import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedEmpPageComponent } from './posted-emp-page.component';

describe('PostedEmpPageComponent', () => {
  let component: PostedEmpPageComponent;
  let fixture: ComponentFixture<PostedEmpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedEmpPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedEmpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
