import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnePostulerPageComponent } from './personne-postuler-page.component';

describe('PersonnePostulerPageComponent', () => {
  let component: PersonnePostulerPageComponent;
  let fixture: ComponentFixture<PersonnePostulerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnePostulerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnePostulerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
