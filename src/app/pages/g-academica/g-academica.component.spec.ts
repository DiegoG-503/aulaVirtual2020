import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GAcademicaComponent } from './g-academica.component';

describe('GAcademicaComponent', () => {
  let component: GAcademicaComponent;
  let fixture: ComponentFixture<GAcademicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GAcademicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
