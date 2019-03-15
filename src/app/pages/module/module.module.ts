import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { ModuleCreateComponent} from './create/create.component';
import { ModuleListComponent } from './list/list.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

const COMPONENTS = [
  ModuleComponent,
  ModuleCreateComponent,
  ModuleListComponent,
];

const ENTRY_COMPONENTS = [
  ModuleComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    ModuleRoutingModule,
	Ng2SmartTableModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class ModuleModule { }
