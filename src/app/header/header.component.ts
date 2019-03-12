import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showFormClicked = false;
  showActivityList = false;
  showForm() {
    this.showFormClicked = true;
  }
  hideForm() {
    this.showFormClicked = false;
  }
  showActivity() {
    this.showActivityList = true;
  }
}
