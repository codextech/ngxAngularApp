import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserCreateComponent } from './create/create.component';
import { UserListComponent } from './list/list.component';


const routes: Routes = [{
    path: '',
    component: UserComponent,
    children: [
        {
            path: 'create',
            component: UserCreateComponent,
        },
        {
            path: 'list',
            component: UserListComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule { }
