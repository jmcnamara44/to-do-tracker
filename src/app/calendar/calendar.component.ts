import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  // months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // buildMonthlyCalendar(){
  //   var currentMonth: number = new Date().getMonth() + 1;
  //   var currentYear: number = new Date().getFullYear();
  //   var dateString: string = currentMonth + '/1/' + currentYear;
  //   var firstDayOfMonth: Date = new Date(dateString);
  //   var weekdayOfFirstDayOfMonth: number = firstDayOfMonth.getDay();
  //   if()
  //
  // }

  constructor() { }

  ngOnInit() {
  }

}
