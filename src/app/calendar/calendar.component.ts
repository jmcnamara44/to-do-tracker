import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentMonth: number = (new Date().getMonth());
  currentYear: number = (new Date().getFullYear());
  // month
  months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor() { }

  ngOnInit() {
    this.showCalendar(this.currentMonth, this.currentYear)
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

      //creating individual cells, filing them up with data.
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

          else {
              let cell = document.createElement("td");
              var dateString: string = date.toString();
              let cellText = document.createTextNode(dateString);
              // if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
              //     cell.classList.add("bg-info");
              // } // color today's date
              cell.appendChild(cellText);
              row.appendChild(cell);
              date++;
          }
      }
      tbl.appendChild(row); // appending each row into calendar body.
    }
  }
}
