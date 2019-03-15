import { CommonModule } from '@angular/common';
import { ComposeComponent } from './compose/compose.component';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TreeModule } from 'angular-tree-component';
import { ReactiveFormsModule } from '@angular/forms';




const COMPONENTS = [
    ReportsComponent,
    ComposeComponent,
  ];

  const ENTRY_COMPONENTS = [
    ReportsComponent,
  ];

  @NgModule({
    imports: [
        ThemeModule,
        ReportsRoutingModule,
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
  export class ReportsModule { }
