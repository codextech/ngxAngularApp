import { Component } from '@angular/core';
import { Locations } from '../location';
import { LocationService } from '../location.service';

@Component({
    selector: 'ngx-location-create',
    styleUrls: ['./create.component.scss'],
    templateUrl: './create.component.html',
})
export class LocationCreateComponent {

    loc = new Locations();

    opts: any = {
        idField: 'id',
        useCheckbox: false,
    }

    locations: any = [];

    constructor(private locService: LocationService) {
        this._loadLocations();
    }

    _loadLocations() {
        this.locService.getTree().subscribe((res) => { this.locations = res });
    }

    onActivate(event) {
        this.loc.parentId = event.node.data.id;
    }

    onSubmit() {
        if (!this.loc.parentId) {
            alert('Please select Parent Location!');
            return;
        }
        this.locService.save(this.loc);
        this.loc = new Locations();
        this._loadLocations();
    }
}
