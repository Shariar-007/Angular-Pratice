import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {HomeComponent} from './pages/home/home';
import {AboutComponent} from './pages/about/about';
import {ContextComponent} from './pages/context/context';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'context', component: ContextComponent },
  // {
  //   path: 'todo',
  //   loadComponent: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //       exposedModule: './Component',
  //     }).then((m) => m.App),
  // },
  {
    path: 'todo',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Routes',
      }).then((m) => m.routes), // or m.REMOTE_ROUTES depending what todo exports
  },
];
