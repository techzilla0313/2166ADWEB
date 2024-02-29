import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent {
  title = ' HTTP Client Demonstration ';
  httpusers: any;

  searchText: any;

  constructor(private httpclientList: HttpclientService) {
    this.httpclientList.getUsersRemotely().subscribe((data : any) => {
      this.httpusers = data;
    });
  }
}
