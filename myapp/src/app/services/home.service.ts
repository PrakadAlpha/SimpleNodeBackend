import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class HomeService {
private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }
  getDatas(): Observable<any> {
      return this.http.get('http://localhost:3031/api/register').map(res => res.json());
    }

    addData(data): Observable<any> {
      return this.http.post('http://localhost:3031/api/register', JSON.stringify(data), this.options);
    }

    editData(data): Observable<any> {
      return this.http.put(`http://localhost:3031/api/register/${data.id}`, JSON.stringify(data), this.options);
    }

    deleteData(data): Observable<any> {
      return this.http.delete(`http://localhost:3031/api/register/${data.id}`, this.options);
    }

  }
