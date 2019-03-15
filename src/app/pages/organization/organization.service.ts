import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Organization } from './organization'

@Injectable({ providedIn: 'root' })
export class OrganizationService {

    baseUrl: string = 'http://localhost:8080/api/org';

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
    getTree() {
        return this.http.get(this.baseUrl + ':tree');
    }
    save(data: Organization): any {
        this.http.post(this.baseUrl, data).subscribe(
            res => {
                return true;
            },
            err => {
                return false;
            },
        );
    }
    update(data: Organization) {
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