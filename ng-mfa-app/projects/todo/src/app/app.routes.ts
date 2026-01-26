import { Routes } from '@angular/router';
import {TodoHome} from './components/todo-home/todo-home';
import {TodoSettings} from './components/todo-settings/todo-settings';

export const routes: Routes = [
  { path: '', component: TodoHome },
  { path: 'settings', component: TodoSettings },
];

