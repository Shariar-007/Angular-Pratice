import { Injectable } from '@angular/core';
import {TodoItem} from '../models/todo-item.model';

// export type TodoItem = { id: number; text: string; done: boolean };
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private nextId = 3;

  private items: TodoItem[] = [
    { id: 1, text: 'Learn Module Federation', done: true },
    { id: 2, text: 'Build Todo remote', done: false },
  ];

  getAll(): TodoItem[] {
    return this.items;
  }

  add(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    this.items = [{ id: this.nextId++, text: trimmed, done: false }, ...this.items];
  }

  toggle(id: number) {
    this.items = this.items.map(t => (t.id === id ? { ...t, done: !t.done } : t));
  }

  remove(id: number) {
    this.items = this.items.filter(t => t.id !== id);
  }
}
