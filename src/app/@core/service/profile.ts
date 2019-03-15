import { Observable } from 'rxjs';

export interface Profile {
    name: string;
    email: string;
    fname: string;
    lname: string;
}


export abstract class ProfileData {
    abstract getProfile(): Observable<Profile>;
}
