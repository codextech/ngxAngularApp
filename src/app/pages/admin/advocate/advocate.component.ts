import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { AdvocateService } from './advocate.service';
import { Advocate } from './advocate';
import { ActiveModel } from '../../models/active.model';

@Component({
    selector: 'ngx-advocate-list',
    templateUrl: './advocate.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AdvocateComponent {


    settings = {
        mode: 'inline',
        pager: {
            perPage: 10,
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
            id: {
                title: 'ID',
                type: 'number',
                editable: false,
            },
            nameEng: {
                title: 'Name English',
                type: 'string',
            },
            nameBangla: {
                title: 'Name Bangla',
                type: 'string',
            },
            active: ActiveModel,
            mobile: {
                title: 'Mobile',
                type: 'string',
            },
            telephone: {
                title: 'Telephone',
                type: 'string',
            },
            email: {
                title: 'Email',
                type: 'number',
            },
            fax: {
                title: 'Fax',
                type: 'string',
            },
            address: {
                title: 'Address',
                type: 'string',
            },
            webAddress: {
                title: 'Web Address',
                type: 'number',
            },
            remarks: {
                title: 'Remarks',
                type: 'number',
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: AdvocateService) {
        this.load();

    }

    load(): void {
        this.service.getAll().subscribe((res: Advocate[]) => {
            this.source.load(res);
        });
    }

    onCreate(event): void {
        this.service.save(event.newData);
        event.confirm.resolve(event.newData);
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
