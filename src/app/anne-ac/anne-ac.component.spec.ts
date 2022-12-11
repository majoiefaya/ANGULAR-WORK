import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneAcComponent } from './anne-ac.component';

describe('AnneAcComponent', () => {
  let component: AnneAcComponent;
  let fixture: ComponentFixture<AnneAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnneAcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnneAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
