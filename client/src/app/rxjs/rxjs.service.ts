import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(private http: HttpClient) {
  }

  update() {
    return this.http.post('http://localhost:3000/update', null);
  }
}
