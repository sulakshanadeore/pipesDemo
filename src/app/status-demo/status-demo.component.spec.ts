import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusDemoComponent } from './status-demo.component';

describe('StatusDemoComponent', () => {
  let component: StatusDemoComponent;
  let fixture: ComponentFixture<StatusDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusDemoComponent]
    });
    fixture = TestBed.createComponent(StatusDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
