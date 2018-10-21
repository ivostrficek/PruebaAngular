import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorganismComponent } from './adminorganism.component';

describe('AdminorganismComponent', () => {
  let component: AdminorganismComponent;
  let fixture: ComponentFixture<AdminorganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminorganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminorganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
