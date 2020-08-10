import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesComponent } from './profes.component';

describe('ProfesComponent', () => {
  let component: ProfesComponent;
  let fixture: ComponentFixture<ProfesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
