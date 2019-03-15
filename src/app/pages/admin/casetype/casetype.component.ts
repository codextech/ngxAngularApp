import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { CaseTypeService } from './casetype.service';
import { CaseType } from './casetype';
import {ActiveModel} from '../../models/active.model';

@Component({
    selector: 'ngx-casetype-list',
    templateUrl: './casetype.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class CaseTypeComponent {


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

    constructor(private service: CaseTypeService) {
        this.load();

    }

    load(): void {
        this.service.getAll().subscribe((res: CaseType[]) => {
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
        event.confirm.resolve(event.newData);
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
