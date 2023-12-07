import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-forecast-hours',
  templateUrl: './forecast-hours.component.html',
  styleUrl: './forecast-hours.component.scss'
})
export class ForecastHoursComponent implements OnInit {
  @Input() forecastDataEachHour: any;
  time: any;

  constructor(private dataService: DataService) {}

  ngOnInit() { 

  }



}
