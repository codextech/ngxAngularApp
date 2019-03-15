import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Respondent } from './respondent'

@Injectable({ providedIn: 'root' })
export class RespondentService {

    baseUrl: string = 'http://localhost:8080/api/respondent';

    constructor(private http: HttpClient) { }
    getOne(id: number) {
        return this.http.get(this.baseUrl + '/' + id);
    }
    getAll() {
        return this.http.get(this.baseUrl + ':all');
    }
    getActive() {
        return this.http.get(this.baseUrl);
    }
    save(data: Respondent): any {
        this.http.post(this.baseUrl, data).subscribe(
            res => {
                return true;
            },
            err => {
                return false;
            }
        );
    }
    update(data: Respondent) {
        this.http.put(this.baseUrl, data).subscribe(
            res => {
                return true;
            },
            err => {
                return false;
            }
        );
    }
    delete(id: number) {
        this.http.delete(this.baseUrl + '/' + id).subscribe(
            res => {
                return true;
            },
            err => {
                return false;
            }
        );
    }
}