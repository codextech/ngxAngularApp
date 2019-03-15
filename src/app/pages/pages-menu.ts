import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'ion-home',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'Admin',
        icon: 'nb-gear',
        children: [
            {
                title: 'Advocate',
                link: '/pages/admin/advocate',
            },
            {
                title: 'Court',
                link: '/pages/admin/court',
            },
            {
                title: 'Case Type',
                link: '/pages/admin/casetype',
            },
            {
                title: 'Petitioner',
                link: '/pages/admin/pet',
            },
            {
                title: 'Respondent',
                link: '/pages/admin/resp',
            },
            {
                title: 'Status',
                link: '/pages/admin/status',
            },
            {
                title: 'Org Type',
                link: '/pages/admin/orgtype',
            },
        ],
    },
    {
        title: 'Module',
        icon: 'nb-grid-a',
        children: [
            {
                title: 'Create',
                link: '/pages/module/create',
            },
            {
                title: 'List',
                link: '/pages/module/list',
            },
        ],
    },
    {
        title: 'Location',
        icon: 'nb-location',
        children: [
            {
                title: 'Create',
                link: '/pages/location/create',
            },
            {
                title: 'List',
                link: '/pages/location/list',
            },
        ],
    },
    {
        title: 'Organization',
        icon: 'nb-home',
        children: [
            {
                title: 'Create',
                link: '/pages/org/create',
            },
            {
                title: 'List',
                link: '/pages/org/list',
            },
        ],
    },
    {
        title: 'Menu',
        icon: 'nb-menu',
        children: [
            {
                title: 'Create',
                link: '/pages/menus/create',
            },
            {
                title: 'List',
                link: '/pages/menus/list',
            },
        ],
    },
    {
        title: 'User Role',
        icon: 'nb-layout-two-column',
        children: [
            {
                title: 'Create',
                link: '/pages/users/role/create',
            },
            {
                title: 'List',
                link: '/pages/users/role/list',
            },
        ],
    },
    {
        title: 'Users',
        icon: 'nb-person',
        children: [
            {
                title: 'Create',
                link: '/pages/users/create',
            },
            {
                title: 'List',
                link: '/pages/users/list',
            },
        ],
    },
    {
        title: 'Report',
        icon: 'nb-bar-chart',
        children: [
            {
                title: 'Compose',
                link: '/pages/reports/compose',
            },
        ],
    },
    {
        title: 'Change Password',
        icon: 'nb-danger',
        link: '/auth/change-password',
    },
    {
        title: 'Logout',
        icon: 'nb-power',
        link: '/auth/logout',
    },
];
