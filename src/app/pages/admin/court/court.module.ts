import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { CourtComponent } from './court.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        ThemeModule,
        Ng2SmartTableModule,
    ],
    declarations: [
        CourtComponent,
    ]
})
export class CourtModule { }
