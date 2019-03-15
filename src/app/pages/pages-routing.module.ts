import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [{
        path: 'dashboard',
        component: DashboardComponent,
    }, {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
    }, {
        path: 'module',
        loadChildren: './module/module.module#ModuleModule',
    }, {
        path: 'org',
        loadChildren: './organization/organization.module#OrganizationModule',
    }, {
        path: 'location',
        loadChildren: './location/location.module#LocationModule',
    }, {
        path: 'menus',
        loadChildren: './menu/menu.module#MenuModule',
    }, {
        path: 'users',
        loadChildren: './user/user.module#UserModule',
    }, {
        path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule',
    }, {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '**',
        component: NotFoundComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
