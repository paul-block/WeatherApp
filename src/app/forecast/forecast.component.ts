import { Component, Input, OnInit } from '@angular/core';
import { ForecastData } from '../interfaces/forecastData.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent implements OnInit{
@Input() forecastDataEachDay: any;

constructor(private dataService: DataService) {}


ngOnInit() {
  console.log(this.forecastDataEachDay)
}
}
