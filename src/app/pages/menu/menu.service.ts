import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Menu } from './menu'

@Injectable({ providedIn: 'root' })
export class MenuService {

    baseUrl: string = 'http://localhost:8080/api/menu';

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
    save(data: Menu): any {
        this.http.post(this.baseUrl, data).subscribe(
            res => {
                return true;
            },
            err => {
                return false;
            }
        );
    }
    update(data: Menu) {
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
