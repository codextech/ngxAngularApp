import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserCreateComponent} from './create/create.component';
import { UserListComponent } from './list/list.component';
import { TreeModule } from 'angular-tree-component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

const COMPONENTS = [
  UserComponent,
  UserCreateComponent,
  UserListComponent,
];

const ENTRY_COMPONENTS = [
  UserComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    UserRoutingModule,
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
export class UserModule { }
