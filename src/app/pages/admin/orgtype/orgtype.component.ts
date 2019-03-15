import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {ActiveModel} from '../../models/active.model';
import { OrgTypeService } from './orgtype.service';
import { OrgType } from './orgtype';
import { ToastService } from '../../../@core/service/toast.service';


@Component({
    selector: 'ngx-orgtype-list',
    templateUrl: './orgtype.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class OrgTypeComponent {


    settings = {
        mode: 'inline',
        selectMode: 'single',
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
                hidden: true,
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

    constructor(private service: OrgTypeService, private toaster: ToastService) {
        this.load();

    }

    load(): void {
        this.service.getAll().subscribe((res: OrgType[]) => {
            this.source.load(res);
        });
    }

    onCreate(event): void {
        this.service.save(event.newData);
        event.confirm.resolve(event.newData);
        this.toaster.created();
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
            this.toaster.deleted();
        } else {
            event.confirm.reject();
        }
    }
}
