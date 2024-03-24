import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test7SecondComponent } from './test7-second.component';

describe('Test7SecondComponent', () => {
  let component: Test7SecondComponent;
  let fixture: ComponentFixture<Test7SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test7SecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Test7SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
