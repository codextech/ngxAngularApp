import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { ActiveModel } from '../../models/active.model';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
    selector: 'ngx-menu-list',
    templateUrl: './list.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class MenuListComponent {


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
            title: {
                title: 'Menu Title',
                type: 'string',
            },
            urlPath: {
                title: 'URL Path',
                type: 'string',
            },
            toolTip: {
                title: 'Tooltip',
                type: 'string',
            },
            menuClass: {
                title: 'Menu Class',
                type: 'string',
            },
            desc: {
                title: 'Description',
                type: 'string',
            },
            type: {
                title: 'Menu Type',
                type: 'string',
            },
            sortOrder: {
                title: 'Sort Order',
                type: 'string',
            },
            active: ActiveModel,
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: MenuService) {
        this.load();

    }

    load(): void {
        this.service.getAll().subscribe((res: Menu[]) => {
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
