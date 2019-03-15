import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProfileData, Profile } from './profile';

@Injectable()
export class ProfileService extends ProfileData {
    private profile: Profile = {
        name: 'ajaglan',
        fname: 'Anil',
        lname: 'Jaglan',
        email: 'test@mail.com',
    };

    getProfile(): Observable<Profile> {
        return of(this.profile);
    }
}
