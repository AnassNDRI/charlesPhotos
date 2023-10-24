import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRateFormComponent } from './service-rate-form.component';

describe('ServiceRateFormComponent', () => {
  let component: ServiceRateFormComponent;
  let fixture: ComponentFixture<ServiceRateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceRateFormComponent]
    });
    fixture = TestBed.createComponent(ServiceRateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
