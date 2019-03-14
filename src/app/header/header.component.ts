import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showFormClicked = false;
  showActivityList = false;

  formClicked() {
    if (this.showFormClicked == false) {
      this.showFormClicked = true;
    } else {
      this.showFormClicked = false;
    }
  }
  hideForm() {
    this.showFormClicked = false;
  }
  showActivity() {
    this.showActivityList = true;
  }
}
