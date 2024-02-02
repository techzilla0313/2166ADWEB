import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent {
  staff = [ 
    { company: 'Mincomms', game: 'Ran Online', year : '2002', website: 'https://www.ranonlineph-official.com/' },   
    { company: 'Primus Inc', game: 'Dragon Nest', year : '2010', website: 'https://sea.dragonnest.com/main' },   
    { company: 'Gravity Game Hub', game: 'Ragnarok Online', year : '2002', website: 'https://ro.gnjoy.asia/index.php' },   
  
    ];
}
