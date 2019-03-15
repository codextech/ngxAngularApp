import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {ActiveModel} from '../../models/active.model';
import { StatusService } from './status.service';
import { Status } from './status';

@Component({
    selector: 'ngx-status-list',
    templateUrl: './status.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class StatusComponent {


    settings = {
        mode: 'inline',
        selectMode: 'single',
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
            id: {
                title: 'ID',
                type: 'number',
                editable: false,
            },
            name: {
                title: 'Name',
                type: 'string',
            },
            active: ActiveModel,
            remarks: {
                title: 'Remarks',
                type: 'number',
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: StatusService) {
        this.load();

    }

    load(): void {
        this.service.getAll().subscribe((res: Status[]) => {
            this.source.load(res);
            //this.source.setPaging(1, 10, false);
        });
    }

    onCreate(event): void {
        console.log(event);
        this.service.save(event.newData);
        event.confirm.resolve(event.newData);
        this.load();
    }

    onEdit(event): void {
        console.log(event.data);
        this.service.update(event.newData);
        event.confirm.resolve();
    }

    onDeleteConfirm(event): void {
        console.log(event);
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.delete(event.data.id);
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}
