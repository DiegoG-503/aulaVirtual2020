import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisGradosComponent } from './mis-grados.component';

describe('MisGradosComponent', () => {
  let component: MisGradosComponent;
  let fixture: ComponentFixture<MisGradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisGradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
