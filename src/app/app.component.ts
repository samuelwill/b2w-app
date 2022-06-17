import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'b2w-app';

  public selectedDate: Date;

  constructor() {
    this.selectedDate = new Date();
  }

  public onDateChanged(date: Date): void {
    this.selectedDate = date;
  }
}
