import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
    selector: 'ngx-users-create',
    styleUrls: ['./create.component.scss'],
    templateUrl: './create.component.html',
})
export class UserCreateComponent {

    user = new User();

    constructor() {
        this.user.orgIds = [];
    }

    opts: any = {
        idField: 'id',
        useCheckbox: true,
        useTriState: false,
    }

    orgs = [{
        name: 'Secteriate',
        id: 1,
        children: [{
            name: 'MoPA',
            id: 2,
        }]
    }, {
        name: 'Planning',
        id: 3,
    },
    ];


    onSelect(event) {
        this.user.orgIds.push(event.node.data.id);
    }

    onDeselect(event) {
        this.user.orgIds.splice(this.user.orgIds.indexOf(event.node.data.id), 1);
    }

    onSubmit(f: NgForm) {
    }
}
