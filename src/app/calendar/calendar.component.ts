import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();
  selectYear = document.getElementById("year");
  selectMonth = document.getElementById("month");

  months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor() { }

  ngOnInit() {
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-body");
    document.getElementById("month-name").innerHTML = this.months[month] + " " + year;
    this.selectYear = year;
    this.selectMonth = month;

    let date = 1;
    for(let i = 0; i < 6; i++){
      let row = document.createElement("tr");

      for(let j = 0; j < 7; j++){
        if(i === 0 && j < firstDay) {
          let cell = document.createElement("td");
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if(date > daysInMonth) {
          break;
        } else {
          let cell = document.createElement("td");
          let dateString = date.toString();
          let cellText = document.createTextNode(dateString);
          if(date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) {
            cell.classList.add("red");
          }
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }
      }
      tbl.appendChild(row);
    }

  }

}
