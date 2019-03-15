import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocationService } from '../../location/location.service';
import { OrganizationService } from '../organization.service';
import { Organization } from '../organization';

@Component({
    selector: 'organization-create',
    styleUrls: ['./create.component.scss'],
    templateUrl: './create.component.html',
})
export class OrganizationCreateComponent {

    org = new Organization();

    opts: any = {
        idField: 'id',
        useCheckbox: false,
    }

    orgs: any = [];

    locations: any = [];

    constructor(private locService: LocationService, private orgService: OrganizationService) {
        this._loadLocations();
        this._loadOrgs();
    }

    _loadLocations() {
        this.locService.getTree().subscribe((res) => { this.locations = res });
    }

    _loadOrgs() {
        this.orgService.getTree().subscribe((res) => { this.orgs = res });
    }

    onActivate(event) {
        this.org.parentId = event.node.data.id;
    }

    onLocActivate(event) {
        this.org.locId = event.node.data.id;
    }


    onSubmit(f: NgForm) {
        this.orgService.save(this.org);
        this.org = new Organization();
        this._loadOrgs();
        this._loadLocations();
    }
}
