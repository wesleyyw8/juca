import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get(videoId) {
    const url = environment.squaresEndpoint;
    return this.http.get(`${url}?id=${videoId}`);
  }
}
