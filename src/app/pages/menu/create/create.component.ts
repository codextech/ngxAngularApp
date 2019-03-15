import { Component } from '@angular/core';
import { Menu } from '../menu';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'ngx-menu-create',
    styleUrls: ['./create.component.scss'],
    templateUrl: './create.component.html',
})
export class MenuCreateComponent {

    menu = new Menu();

    onSubmit(f: NgForm) {
    }
}
