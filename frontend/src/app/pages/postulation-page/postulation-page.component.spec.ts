import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulationPageComponent } from './postulation-page.component';

describe('PostulationPageComponent', () => {
  let component: PostulationPageComponent;
  let fixture: ComponentFixture<PostulationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
