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

    this.getTolerance()

  }

  getTolerance(): number {
    switch (this.type) {
      case "radar":
      case "section":
        if (this.speed <= 100) {
          return 5;
        } else if (this.speed <= 150) {
          return 6;
        } else {
          return 7;
        }
      case "laser":
        if (this.speed <= 100) {
          return 3;
        } else if (this.speed <= 150) {
          return 4;
        } else {
          return 5;
        }
      case "curve":
        if (this.speed <= 100) {
          return 10;
        } else {
          return 14;
        }
    }
    return 0;
  }

  getTransgessionSpeed() {
    let speed = this.speed - this.getTolerance() - this.speedLimit;
    if (speed > 0)
      return speed;
    return 0
  }

  getTransgessionPhase() {
    let transgession = this.getTransgessionSpeed();

    if (transgession < 1) {
      return "0";
    }
    if (transgession >= 1 && transgession <= 5) {
      return "1-5";
    }
    if (transgession <= 10) {
      return "6-10";
    }
    if (transgession <= 15) {
      return "11-15";
    }
    if (transgession <= 20) {
      return "16-20";
    }
    if (transgession <= 25) {
      return "21-25";
    }
    if (transgession <= 30) {
      return "26-30";
    }
    if (transgession <= 35) {
      return "31-35";
    }
    if (transgession > 35) {
      return "über 35"
    }
    return "0";
  }

  getFine() {
    if (this.getTransgessionPhase() === "0")
      return 0;
    switch (this.roadType) {
      case "innerorts":
        if (this.getTransgessionSpeed() >= 40)
          return "Raserdelikt";
        switch (this.getTransgessionPhase()) {
          case "1-5":
            return "CHF 40";
          case "6-10":
            return "CHF 120";
          case "11-15":
            return "CHF 250"
          case "16-20":
            return "Anzeige / Verwarnung"
          case "21-25":
            return "1 Monat Entzug (mindestens)"
          default:
            return "3 Monate Entzug (mindestens)"
        }
      case "ausserorts":
      case "autostrasse":
        if (this.getTransgessionSpeed() >= 60)
          return "Raserdelikt";
        switch (this.getTransgessionPhase()) {
          case "1-5":
            return "CHF 40";
          case "6-10":
            return "CHF 100";
          case "11-15":
            return "CHF 160"
          case "16-20":
            return "CHF 240"
          case "21-25":
            return "Anzeige / Verwarnung"
          case "26-30":
            return "1 Monat Entzug (mindestens)"
          default:
            return "3 Monate Entzug (mindestens)"
        }
      case "autobahn":
        if (this.getTransgessionSpeed() >= 80)
          return "Raserdelikt";
        switch (this.getTransgessionPhase()) {
          case "1-5":
            return "CHF 20";
          case "6-10":
            return "CHF 60";
          case "11-15":
            return "CHF 120"
          case "16-20":
            return "CHF 180"
          case "21-25":
            return "260"
          case "26-30":
            return "Anzeige / Verwarnung"
          case "31-35":
            return "1 Monat Entzug (mindestens)"
          default:
            return "3 Monate Entzug (mindestens)"
        }
    }
    return 0;
  }
}
