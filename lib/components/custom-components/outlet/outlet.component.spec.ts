import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletComponent } from './outlet.component';

describe('OutletComponent', () => {
  let component: OutletComponent;
  let fixture: ComponentFixture<OutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
