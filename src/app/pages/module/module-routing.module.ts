import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleComponent } from './module.component';
import { ModuleCreateComponent } from './create/create.component';
import { ModuleListComponent } from './list/list.component';


const routes: Routes = [{
  path: '',
  component: ModuleComponent,
  children: [
    {
      path: 'create',
      component: ModuleCreateComponent,
    },
    {
      path: 'list',
      component: ModuleListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleRoutingModule { }
