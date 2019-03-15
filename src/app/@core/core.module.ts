import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ResponseType, 
    NbOAuth2GrantType, NbAuthOAuth2Token, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';


import { throwIfAlreadyLoaded } from './module-import-guard';
import {
    AnalyticsService,
    LayoutService,
    PlayerService,
    StateService,
} from './utils';
import { environment } from '../../environments/environment';
import { ProfileService } from './service/profile.service';
import { ProfileData } from './service/profile';
import { ToastService } from './service/toast.service';

const DATA_SERVICES = [
    { provide: ProfileData, useClass: ProfileService },
    ToastService,
];

export class NbSimpleRoleProvider extends NbRoleProvider {
    getRole() {
        // here you could provide any role based on any auth flow
        return observableOf('guest');
    }
}

export const NB_CORE_PROVIDERS = [,
    ...DATA_SERVICES,
    ...NbAuthModule.forRoot({
        strategies: [
            NbDummyAuthStrategy.setup({
                name: 'email',
                delay: 3000,
            }),
            NbOAuth2AuthStrategy.setup({
                name: 'oauth2',
                clientId: 'test',
                clientSecret: 'test',
                clientAuthMethod: 'POST',
                authorize: {
                    endpoint: '${environment.apiHost}/oauth/token',
                    responseType: NbOAuth2ResponseType.TOKEN,
                    scope: '${environment.apiHost}/user.profile',
                },
                token: {
                    endpoint: `${environment.apiHost}/oauth/token`,
                    grantType: NbOAuth2GrantType.PASSWORD,
                    class: NbAuthOAuth2Token,
                },
                refresh: {
                    endpoint: `${environment.apiHost}/oauth/token`,
                    grantType: NbOAuth2GrantType.REFRESH_TOKEN,
                },
                redirect: {
                    success: '/pages/dashboard',
                    failure: '/pages/error',
                },
            }),
        ],
        forms: {},

    }).providers,

    NbSecurityModule.forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,

    {
        provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
    },
    AnalyticsService,
    LayoutService,
    PlayerService,
    StateService,
];

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        NbAuthModule,
    ],
    declarations: [],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: CoreModule,
            providers: [
                ...NB_CORE_PROVIDERS,
            ],
        };
    }
}
