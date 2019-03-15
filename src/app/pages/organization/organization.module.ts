import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { OrganizationCreateComponent} from './create/create.component';
import { OrganizationListComponent } from './list/list.component';
import { TreeModule } from 'angular-tree-component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

const COMPONENTS = [
  OrganizationComponent,
  OrganizationCreateComponent,
  OrganizationListComponent,
];

const ENTRY_COMPONENTS = [
  OrganizationComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    OrganizationRoutingModule,
    Ng2SmartTableModule,
    TreeModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class OrganizationModule { }
