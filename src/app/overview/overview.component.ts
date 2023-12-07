import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  inputValue: string = '';
  autocompleteArray: any = [];
  currentForecast: any = null;
  forecastDataEachHour:any;
  savedLocations: any = [];
  time:any;
  relevantHours:any = [];
  highestTemp!: number;
  lowestTemp!: number;

  showDailyForecast: boolean = false;

  constructor(private apiService: ApiService, private dataService: DataService) {}

   ngOnInit() {
      this.dataService.currentForecastData$.subscribe(data => {
        this.currentForecast = data;
        if (data != null){
          this.onlyRelevantHours();
          this.getLowestAndHighestTemperature();
        }

      })
      setTimeout(() => {
        this.dataService.currentTime.subscribe(currentTime => {
          if (currentTime != undefined) {
          this.time = +currentTime.substring(11,13);
          }
    })
      if (this.currentForecast) {
        this.onlyRelevantHours();
      }
      }, 500);
  this.dataService.checkLocalStorage();
}

  getAutocomplete(value: string) {
    if (value !== '') {
      this.apiService.getAutocompleteSuggestions(value).subscribe(suggestions => {
        this.autocompleteArray = suggestions;
      })
    } 
  }

  getLowestAndHighestTemperature() {
    this.lowestTemp = Math.min(...this.relevantHours.map((data:any) => data.temp_c));
    this.highestTemp = Math.max(...this.relevantHours.map((data:any) => data.temp_c));
  }

  toggleDailyForecasts() {
    this.showDailyForecast =! this.showDailyForecast;
  }

  addCurrentLocation() {
    if (!this.dataService.savedLocations.some( (element: { location: { name: string; }; }) => element.location.name === this.currentForecast.location.name)) {
      this.dataService.savedLocations.push(this.currentForecast);
      this.dataService.updateLocalStorage();
    }
    else console.log('location already exists');
  }

  getForecastById(id: string = '113666') { 
    this.apiService.getForecastDataByIp(id).subscribe(data => {
      this.dataService.currentForecastData$.next(data);
      this.dataService.currentTime.next(data.current.last_updated);
      this.autocompleteArray = [];
      this.inputValue = '';
      this.onlyRelevantHours();
      this.getLowestAndHighestTemperature();
      console.log(this.currentForecast)
    })
  }

  checkTime(time:any) {
    if (time > this.time) return true;
    else return false;
   }

   onlyRelevantHours() {
    this.relevantHours = []

    let allHoursForToday = [...this.currentForecast?.forecast.forecastday[0].hour];
    let allHoursForTomorrow = [...this.currentForecast?.forecast.forecastday[1].hour];

    allHoursForToday.forEach((element: any) => {
      let fullHours = element.time.substring(11,13);
         if (this.checkTime(fullHours)) {
          this.relevantHours.push(element);
         } 
    });
    allHoursForTomorrow.forEach((element: any) => {
      if (this.relevantHours.length < 24) {
      this.relevantHours.push(element);
      } else return
    })
    console.log(this.relevantHours)
   }
}
