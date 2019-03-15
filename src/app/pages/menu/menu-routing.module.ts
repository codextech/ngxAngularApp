import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenusComponent } from './menu.component';
import { MenuCreateComponent } from './create/create.component';
import { MenuListComponent } from './list/list.component';


const routes: Routes = [{
    path: '',
    component: MenusComponent,
    children: [
        {
            path: 'Fcreate',
            component: MenuCreateComponent,
        },
        {
            path: 'list',
            component: MenuListComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MenuRoutingModule { }
