import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './@auth/auth-guard.service';

import {
    NbAuthComponent,
    NbLoginComponent,
    NbLogoutComponent,
    NbRequestPasswordComponent,
    NbResetPasswordComponent,
} from '@nebular/auth';
import { ComposeComponent } from './pages/reports/compose/compose.component';

const routes: Routes = [


    {
        path: 'pages',
        canActivate: [AuthGuard],
        loadChildren: 'app/pages/pages.module#PagesModule',
    },
    {
        path: 'auth',
        component: NbAuthComponent,
        children: [
            {
                path: '',
                component: NbLoginComponent,
            },
            {
                path: 'login',
                component: NbLoginComponent,
            },
            {
                path: 'logout',
                component: NbLogoutComponent,
            },
            {
                path: 'request-password',
                component: NbRequestPasswordComponent,
            },
            {
                path: 'reset-password',
                component: NbResetPasswordComponent,
            },
        ],
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
    useHash: true,
};

@NgModule({
    imports: [
        RouterModule.forRoot(routes, config),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
