import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }
  staff = [ 
    { firstName: 'Adrian', lastName: 'Tomas', email: 'adrian.tomas@test.com', role: 'User' },   
    { firstName: 'Sean', lastName: 'Anunciacion', email: 'sean.anunciacion@test.com', role: 'Admin' }, 
    { firstName: 'April', lastName: 'March', email: 'april.march@test.com', role: 'Admin' }, 
    { firstName: 'Maria', lastName: 'Khalifa', email: 'maria.khalifa@test.com', role: 'User' }, 
    { firstName: 'Jay', lastName: 'Manalo', email: 'jay.manalo@test.com', role: 'User' } 
    ];
}
