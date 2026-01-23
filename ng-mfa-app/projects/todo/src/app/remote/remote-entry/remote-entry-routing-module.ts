import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RemoteEntry} from './remote-entry/remote-entry';

const routes: Routes = [
  { path: '', component: RemoteEntry }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoteEntryRoutingModule { }
