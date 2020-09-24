import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingComponent } from './spending.component';
import { ActivatedRoute, Router } from '@angular/router';

describe('SpendingComponent', () => {
  let component: SpendingComponent;
  let fixture: ComponentFixture<SpendingComponent>;

  beforeEach(async(() => {
    const fakeActivatedRoute = {
      snapshot: {
        paramMap: {
          get(): string {
            return '123';
          },
        },
      },
    };

    TestBed.configureTestingModule({
      declarations: [SpendingComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }, Router],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingComponent);
    component = fixture.componentInstance;
    component.spending = [];
    // component.spendingForm = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
