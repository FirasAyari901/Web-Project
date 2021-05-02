import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostulationComponent } from './card-postulation.component';

describe('CardPostulationComponent', () => {
  let component: CardPostulationComponent;
  let fixture: ComponentFixture<CardPostulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPostulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
