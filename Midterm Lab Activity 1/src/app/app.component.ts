import { Component } from '@angular/core';
import { Observable, map, interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time$ : Observable<Date>;
  title = 'activity1';
  presentDate = new Date(); 
  price : number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  a: number = 0.259;
  b: number = 1.3495;
  c: number = 2.4567;
  constructor() {
    this.time$ = interval(1000).pipe(map(() => new Date()));
  }
}
