import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Locations } from './location'

@Injectable({ providedIn: 'root' })
export class LocationService {

    baseUrl: string = 'http://localhost:8080/api/location';

    constructor(private http: HttpClient) { }
    getOne(id: number) {
        return this.http.get(this.baseUrl + "/" + id);
    }
    getAll() {
        return this.http.get(this.baseUrl + ':all');
    }
    getActive() {
        return this.http.get(this.baseUrl);
    }
    getTree() {
        return this.http.get(this.baseUrl + ":tree");
    }
    save(data: Locations): any {
        this.http.post(this.baseUrl, data).subscribe(
            res => {
                return true;
            },
            err => {
                console.log("Error occured");
                return false;
            }
        );
    }
    update(data: Locations) {
        this.http.put(this.baseUrl, data).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            }
        );
    }
    delete(id: number) {
        this.http.delete(this.baseUrl + "/" + id).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            }
        );
    }
}