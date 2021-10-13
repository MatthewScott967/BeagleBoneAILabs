import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BeagleBone AI Labs';
  showProgress = false;

  showProgressBar()
  {
    this.showProgress = true;
  }

  hideProgressBar()
  {
    this.showProgress = false;
  }
}
