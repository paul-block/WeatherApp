import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-saved-location',
  templateUrl: './saved-location.component.html',
  styleUrl: './saved-location.component.scss'
})
export class SavedLocationComponent {

  @Input() location:any;
  updatedData:any;

  constructor(private dataService: DataService, private apiService: ApiService) {}

  showLocationInOverview() {
    this.apiService.getForecastDataByLatandLon(this.location.location.lat, this.location.location.lon).subscribe(data => { 
      this.updatedData = data;
      this.location = this.updatedData;
      console.log(this.updatedData);
      this.dataService.currentForecastData$.next(this.updatedData);
      this.dataService.currentTime.next(data.current.last_updated);
      this.dataService.sidebarVisible = false;
    })
  }

}
