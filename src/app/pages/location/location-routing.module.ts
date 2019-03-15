import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationComponent } from './location.component';
import { LocationCreateComponent } from './create/create.component';
import { LocationListComponent } from './list/list.component';


const routes: Routes = [{
  path: '',
  component: LocationComponent,
  children: [
    {
      path: 'create',
      component: LocationCreateComponent,
    },
    {
      path: 'list',
      component: LocationListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule { }
