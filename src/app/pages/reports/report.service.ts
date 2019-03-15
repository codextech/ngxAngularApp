import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compose } from './compose/compose';


@Injectable({ providedIn: 'root' })
export class ReportService {

    baseUrl: string = 'http://localhost:8080/api/user';

    constructor(private http: HttpClient) { }
    saveComposeForm(data: Compose): any {
        this.http.post(this.baseUrl, data).subscribe(
            res => {
                return true;
            },
            err => {
                return false;
            },
        );
    }

}
