import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PartnerComponent } from './partner/partner.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';


const routes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'home', component: HomeComponent},
  {path: 'partner', component: PartnerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'join', component: JoinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }