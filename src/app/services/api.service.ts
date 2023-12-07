import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForecastData } from '../interfaces/forecastData.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getForecastDataByIp(ip: string): Observable<any> {
    return this.http.get(`${environment.apiURL}/forecast.json?key=${environment.apiKey}&q=id:${ip}&days=7`)
  }

  getForecastDataByLatandLon(lat: number, lon: number): Observable<any> {
    return this.http.get(`${environment.apiURL}/forecast.json?key=${environment.apiKey}&q=${lat+','+lon}&days=7`)
  }
  
  getAutocompleteSuggestions(query: string) {
    return this.http.get(`${environment.apiURL}/search.json?key=${environment.apiKey}&q=${query}`);
  }
}
