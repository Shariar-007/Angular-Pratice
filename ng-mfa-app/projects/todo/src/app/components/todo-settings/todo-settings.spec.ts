import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSettings } from './todo-settings';

describe('TodoSettings', () => {
  let component: TodoSettings;
  let fixture: ComponentFixture<TodoSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
