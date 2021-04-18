import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmpPostComponent } from './card-emp-post.component';

describe('CardEmpPostComponent', () => {
  let component: CardEmpPostComponent;
  let fixture: ComponentFixture<CardEmpPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEmpPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
