import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { addition } from './calculator';

describe('AppComponent', () => {

  const component = new AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing-with-jasmine-and-karma'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing-with-jasmine-and-karma');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-testing-with-jasmine-and-karma app is running!');
  });

  it('My test case', () => {
    expect(true).toBe(true);
  });

  it('show alert message', () => {
      expect(component.showMessage('Hello')).toBe('Hello');
  });

  it('show the additional result', ()=> {
    expect(addition(3,2)).toBe(5);
  });

});
