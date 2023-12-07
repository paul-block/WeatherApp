import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  savedLocations: any = [];

  constructor(public dataService: DataService) {}


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dataService.savedLocations, event.previousIndex, event.currentIndex);
  }

  deleteOnDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container && event.container.id === 'delete-zone') {
      const indexToRemove = event.previousIndex;
      this.dataService.savedLocations.splice(indexToRemove, 1);
      this.dataService.savedLocations = [...this.dataService.savedLocations];
      this.dataService.updateLocalStorage();
    }
  }
}