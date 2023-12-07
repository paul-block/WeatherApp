import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ForecastComponent } from './forecast/forecast.component';
import { MatIconModule } from '@angular/material/icon';
import { SavedLocationComponent } from './sidebar/saved-location/saved-location.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ForecastHoursComponent } from './forecast-hours/forecast-hours.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    SidebarComponent,
    ForecastComponent,
    SavedLocationComponent,
    ForecastHoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
