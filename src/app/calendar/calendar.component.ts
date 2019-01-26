import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ActivityService } from './../activity.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [ActivityService]
})
export class CalendarComponent implements OnInit {
  activityToDisplay;
  activityId: string;
  currentMonth: number = (new Date().getMonth());
  currentYear: number = (new Date().getFullYear());
  today: Date = new Date();
  selectedDate: string;
  months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(private route: ActivatedRoute, private location: Location, private activityService: ActivityService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.activityId = urlParameters['id'];
    });
    this.activityService.getActivityById(this.activityId).subscribe(dataLastEmittedFromObserver => {
      this.activityToDisplay = dataLastEmittedFromObserver;
      this.showCalendar(this.currentMonth, this.currentYear)
    })
  }

  editDaysHours(sample) {
    console.log(sample);
    this.selectedDate = sample;
    // console.log(popup);
  }

  next() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear += 1;
    } else {
      this.currentMonth += 1;
    }
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  previous() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear -= 1;
    } else {
      this.currentMonth -= 1;
    }
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  showCalendar(month, year) {
    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";
    var thisMonth = new Date(year, month);
    var nextMonth = new Date(year, month + 1);
    var daysInMonth: number = ((nextMonth.getTime() - thisMonth.getTime()) / 1000 / 60 / 60 / 24);
    let firstDay = thisMonth.getDay();
    let date = 1;
    for (let i = 0; i < 6; i++) {
      // creates a table row
      let row = document.createElement("tr");

      //creating individual cells, filling them up with data.
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          let cell = document.createElement("td");
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        else if (date > daysInMonth) {
          break;
        }

        else {  //start of lff
          let cell = document.createElement("td");
          let dateString: string = date.toString();
          let cellText = document.createTextNode(dateString);
          let lineBreak = document.createElement("br");
          let sampleDate: string = (new Date(year, month, date).toDateString());
          cell.className = "::cellStyle";
          cell.style.cssText = "border: 1px solid #dddddd; width: 100px; height: 100px; vertical-align: top; text-align: right;";
          if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) {
              cell.style.cssText += "background-color: black; color: white;";
          } // color today's date
          
          cell.appendChild(cellText);
          cell.appendChild(lineBreak);
          if (this.activityToDisplay.hoursPracticed.hasOwnProperty(sampleDate)) {
            let daysHours: string;
            daysHours = (this.activityToDisplay.hoursPracticed[sampleDate] / 60).toFixed(2) + " hours practiced.";
            let daysHoursNode = document.createTextNode(daysHours);
            cell.appendChild(daysHoursNode);
          }
          row.appendChild(cell);
          date++;
        } //end of lff
      }
      tbl.appendChild(row); // appending each row into calendar body.
    }
  }
}
