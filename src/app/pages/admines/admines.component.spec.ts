import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminesComponent } from './admines.component';

describe('AdminesComponent', () => {
  let component: AdminesComponent;
  let fixture: ComponentFixture<AdminesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
