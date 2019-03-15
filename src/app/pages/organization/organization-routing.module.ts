import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component';
import { OrganizationCreateComponent } from './create/create.component';
import { OrganizationListComponent } from './list/list.component';


const routes: Routes = [{
  path: '',
  component: OrganizationComponent,
  children: [
    {
      path: 'create',
      component: OrganizationCreateComponent,
    },
    {
      path: 'list',
      component: OrganizationListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationRoutingModule { }
