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

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'angular-testing-with-jasmine-and-karma'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('angular-testing-with-jasmine-and-karma');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('angular-testing-with-jasmine-and-karma app is running!');
  // });  

  // it('My test case', () => {
  //   expect(true).toBe(true);
  // });

  // it('show alert message', () => {
  //   expect(component.showMessage('Hello')).toBe('Hello');
  // });

  // it('show the additional result', ()=> {
  //   expect(addition(3,2)).toBe(5);
  // });

  // xit('show the additional result', ()=> {
  //   expect(addition(5,10)).toBeLessThan(5);
  // });

  it('toBe and toEqual are not same', ()=> {
    // toBe and toEdual same for the string,number,boolean.
    // thats why toBe mostly used for premitive data types
    let a = 1;
    let b = 1
    expect(a).toBe(b);
  })

  it('toBe not works but toEqual works', ()=> {
    // toBe don't work for array types
    // we should use toEqual
    let a = [1];
    let b = [1]
    expect(a).toEqual(b);
  })

  // practise toBe(true)/toBeTrue(true)/toBeTruthy(true) and toBeFalse(true)/toBeFalsy(true)
  it('toBeTrue', ()=> {
    let a = true;
    expect(a).toBeTrue;
  })
  it('toBeFalse', ()=> {
    let a = false;
    expect(a).toBeFalse;
  })
  it('toBeFalsely', ()=> {
    expect(null).toBeFalsy;
  })
  it('jasmin matcher - math function', ()=> {
    let input = "the dotnetoffice tutorials";
    let strPhone = "001-789-56-67";
    expect(input).toMatch(/dotnetoffice/);
    expect(input).not.toMatch(/dot1/);
    expect(strPhone).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
  })
});
