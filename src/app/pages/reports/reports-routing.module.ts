import { ReportsComponent } from './reports.component';
import { ComposeComponent } from './compose/compose.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [{
    path: '',
    component: ReportsComponent,
    children: [
        {
            path: 'compose',
            component: ComposeComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReportsRoutingModule { }
