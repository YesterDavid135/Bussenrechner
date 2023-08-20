import { Component } from '@angular/core';

@Component({
  selector: 'app-speeding',
  templateUrl: './speeding.component.html',
  styleUrls: ['./speeding.component.css']
})
export class SpeedingComponent {

  roadType: string = "";
  speedLimit: number = 0;


  getAvailableSpeeds(): number[] {
    this.speedLimit = 0;
    if (this.roadType === "innerorts"){
      return [20,30,40,50,60];
    }
    if (this.roadType === "ausserorts"){
      return [50, 60, 70, 80]
    }
    if (this.roadType === "autostrasse"){
      return [60, 70, 80, 100]
    }
    if (this.roadType === "autobahn"){
      return [60, 70, 80, 100, 120]
    }
    return [];
  }
}
