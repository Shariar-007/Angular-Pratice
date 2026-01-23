import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TodoService} from '../../../services/todo';
import {TodoItem} from '../../../models/todo-item.model';

@Component({
  selector: 'app-todo-remote-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './remote-entry.html',
  styleUrl: './remote-entry.scss',
})
export class RemoteEntry {
  newTodo = '';

  constructor(public todo: TodoService) {}

  add() {
    this.todo.add(this.newTodo);
    this.newTodo = '';
  }

  toggle(item: TodoItem) {
    this.todo.toggle(item.id);
  }

  remove(item: TodoItem) {
    this.todo.remove(item.id);
  }
}
