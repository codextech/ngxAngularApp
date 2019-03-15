import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Status } from './status'

@Injectable({ providedIn: 'root' })
export class StatusService {

    baseUrl: string = 'http://localhost:8080/api/status';
    
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
    save(data: Status): any {
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
    update(data: Status) {
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