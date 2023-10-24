import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRateEditComponent } from './service-rate-edit.component';

describe('ServiceRateEditComponent', () => {
  let component: ServiceRateEditComponent;
  let fixture: ComponentFixture<ServiceRateEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceRateEditComponent]
    });
    fixture = TestBed.createComponent(ServiceRateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
