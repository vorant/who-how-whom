import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreaderComponent } from './spreader.component';

describe('SpreaderComponent', () => {
  let component: SpreaderComponent;
  let fixture: ComponentFixture<SpreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpreaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
