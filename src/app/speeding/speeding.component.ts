import {Component} from '@angular/core';

@Component({
  selector: 'app-speeding',
  templateUrl: './speeding.component.html',
  styleUrls: ['./speeding.component.css']
})
export class SpeedingComponent {

  roadType: string = "";
  speedLimit: number = 0;
  type: string = "";
  speed: any;
  tolerance: number = 0;

  getAvailableSpeeds(): number[] {
    if (this.roadType === "innerorts") {
      return [20, 30, 40, 50, 60];
    }
    if (this.roadType === "ausserorts") {
      return [50, 60, 70, 80]
    }
    if (this.roadType === "autostrasse") {
      return [60, 70, 80, 100]
    }
    if (this.roadType === "autobahn") {
      return [60, 70, 80, 100, 120]
    }
    return [];
  }

  calculate() {
    if (!this.roadType || !this.speedLimit || !this.type || !this.speed) {
      console.warn("Please use all fields");
      return;
    }
    if (this.speedLimit > this.speed) {
      console.warn("You are not speeding");
      return;
    }

    this.calculateTolerance()

  }

  private calculateTolerance() {
    switch (this.type) {
      case "radar":
      case "section":
        if (this.speed <= 100) {
          this.tolerance = 5;
        } else if (this.speed <= 150) {
          this.tolerance = 6;
        } else {
          this.tolerance = 7;
        }
        break;
      case "laser":
        if (this.speed <= 100) {
          this.tolerance = 3;
        } else if (this.speed <= 150) {
          this.tolerance = 4;
        } else {
          this.tolerance = 5;
        }
        break;
      case "curve":
        if (this.speed <= 100) {
          this.tolerance = 10;
        } else {
          this.tolerance = 14;
        }
    }
  }
}
