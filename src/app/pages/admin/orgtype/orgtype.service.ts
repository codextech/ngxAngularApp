import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { OrgType } from './orgtype'

@Injectable({ providedIn: 'root' })
export class OrgTypeService {

    baseUrl: string = 'http://localhost:8080/api/orgtype';

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
    save(data: OrgType): any {
        this.http.post(this.baseUrl, data).subscribe(
            res => {
                return true;
            },
            err => {
                return false;
            },
        );
    }
    update(data: OrgType) {
        this.http.put(this.baseUrl, data).subscribe(
            res => {
                return true;
            },
            err => {
                return false;
            },
        );
    }
    delete(id: number) {
        this.http.delete(this.baseUrl + '/' + id).subscribe(
            res => {
                return true;
            },
            err => {
                return false;
            },
        );
    }
}