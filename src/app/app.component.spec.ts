import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>, app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  test('should create the app', () => {
    expect(app).toBeTruthy();
  });

  test(`should have as title 'whw'`, () => {
    expect(app.title).toEqual('whw');
  });

  test.skip(`should be equals to 1`, () => {
    expect(app.someF(0)).toBe(1);
  });

  test(`should be equals to 3`, () => {
    expect(app.someF(1)).toBe(3);
    expect(app.someF(2)).toBe(3);
    expect(app.someF(3)).toBe(3);
  });

  /*  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('whw app is running!');
  });*/
});
