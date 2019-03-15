import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'ngx-module-create',
    styleUrls: ['./create.component.scss'],
    templateUrl: './create.component.html',
})
export class ModuleCreateComponent {

    newMac: string;
    newIP: string;

    ips: any = [];

    macs: any = [];


    onIP() {
        if (this.newIP != null) {
            this.ips.push(this.newIP);
            this.newIP = null;
        }
    }
    onMac() {
        if (this.newMac != null) {
            this.macs.push(this.newMac);
            this.newMac = null;
        }
    }

    onSubmit(f: NgForm) {
    }

}
