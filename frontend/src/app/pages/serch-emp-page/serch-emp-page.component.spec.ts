import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchEmpPageComponent } from './serch-emp-page.component';

describe('SerchEmpPageComponent', () => {
  let component: SerchEmpPageComponent;
  let fixture: ComponentFixture<SerchEmpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchEmpPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchEmpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
