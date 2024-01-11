import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This string is interpolated';
  clientName = 'Adrian';
  appliedCSS = 'green';
  notAppliedCSS = false;
  myColor = 'red';  
  
  

  clickCount = 0  
    clickMe() {
      this.clickCount++;
    }
  
    resetClickCount() {
      this.clickCount = 0;
    }
  newColor = '';

    redColor(){
      this.newColor = 'red';
    }

    blueColor(){
      this.newColor = 'blue';
    }

    greenColor(){
      this.newColor = 'green';
    }
}
