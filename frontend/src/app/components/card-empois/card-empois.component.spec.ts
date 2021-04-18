import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmpoisComponent } from './card-empois.component';

describe('CardEmpoisComponent', () => {
  let component: CardEmpoisComponent;
  let fixture: ComponentFixture<CardEmpoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEmpoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmpoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
