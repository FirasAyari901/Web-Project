import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonnePostulerComponent } from './card-personne-postuler.component';

describe('CardPersonnePostulerComponent', () => {
  let component: CardPersonnePostulerComponent;
  let fixture: ComponentFixture<CardPersonnePostulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPersonnePostulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonnePostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
