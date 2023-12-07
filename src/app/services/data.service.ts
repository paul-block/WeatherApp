import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sidebarVisible:boolean = false;
  savedLocations: any = [];
  currentForecastData$: BehaviorSubject<any> = new BehaviorSubject(null);
  currentTime: BehaviorSubject<any> = new BehaviorSubject(undefined); 

  constructor() {}

  updateLocalStorage() {
    localStorage.setItem('savedLocations', JSON.stringify(this.savedLocations));
  }

  checkLocalStorage() {
    let savedLocations = localStorage.getItem('savedLocations');
    if (savedLocations) this.savedLocations = JSON.parse(savedLocations);
  }
}
