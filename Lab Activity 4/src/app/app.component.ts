import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Router Demo';
  
  // String Interpolation
  position = "Coach"
  work_experience = 10
  email = "adriantomass04@gmail.com"
  website = "www.example.com"
  phone = "507-541-4567"

  //Image Interpolation/binding
  imageUrl:string = "assets/localStorage.png";
  imageW: number = 110;
  imageH: number = 100;
}

