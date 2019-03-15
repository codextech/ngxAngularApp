import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdvocateComponent } from './advocate/advocate.component';
import { CourtComponent } from './court/court.component';
import { CaseTypeComponent } from './casetype/casetype.component';
import { PetitionerComponent } from './petitioner/petitioner.component';
import { RespondentComponent } from './respondent/respondent.component';
import { StatusComponent } from './status/status.component';
import { OrgTypeComponent } from './orgtype/orgtype.component';


const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'advocate',
    component: AdvocateComponent,
  }, {
    path: 'court',
    component: CourtComponent,
  }, {
    path: 'casetype',
    component: CaseTypeComponent,
  }, {
    path: 'pet',
    component: PetitionerComponent,
  }, {
    path: 'resp',
    component: RespondentComponent,
  }, {
    path: 'status',
    component: StatusComponent,
  }, {
    path: 'orgtype',
    component: OrgTypeComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
  AdminComponent,
  AdvocateComponent,
  CourtComponent,
  CaseTypeComponent,
  PetitionerComponent,
  RespondentComponent,
  StatusComponent,
  OrgTypeComponent,
];
