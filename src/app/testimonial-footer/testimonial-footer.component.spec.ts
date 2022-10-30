import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialFooterComponent } from './testimonial-footer.component';

describe('TestimonialFooterComponent', () => {
  let component: TestimonialFooterComponent;
  let fixture: ComponentFixture<TestimonialFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
