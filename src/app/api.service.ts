import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIService {
  url="https://api.publicapis.org/entries";

  constructor(private http: HttpClient) { }

  getProductData(){
    return this.http.get(this.url);
  }
}
