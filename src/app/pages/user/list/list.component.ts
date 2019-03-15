import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'ngx-advocate-list',
    templateUrl: './list.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class UserListComponent {


    settings = {
        mode: 'external',
        pager: {
            perPage: 10
        },
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true,
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave: true,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {            
            fullName: {
                title: 'Full Name',
                type: 'string',
            },
            govtId: {
                title: 'Govt Id',
                type: 'string',
            },
            userName: {
                title: 'Username',
                type: 'string',
            },
            password: {
                title: 'Password',
                type: 'string',
            },
            mobile: {
                title: 'Mobile',
                type: 'string',
            },
            email: {
                title: 'Email',
                type: 'string',
            },
            moduleId: {
                title: 'Module',
                type: 'string',
            },
            rolesIds: {
                title: 'Roles',
                type: 'string',
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: UserService) {
        this.load();

    }

    load(): void {
        this.service.getAll().subscribe((res: User[]) => {
            this.source.load(res);
        });
    }

    onCreate(event): void {
        this.service.save(event.newData);
        event.confirm.reject();
        this.load();
    }

    onEdit(event): void {
        this.service.update(event.newData);
        event.confirm.resolve();
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.delete(event.data.id);
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}
