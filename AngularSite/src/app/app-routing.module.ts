import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Lab1SetupComponent } from './lab1-setup/lab1-setup.component';
import { Lab2PinmuxComponent } from './lab2-pinmux/lab2-pinmux.component';
import { PinmuxToolComponent } from './pinmux-tool/pinmux-tool.component';

const appRoutes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'links-page', component: LinksPageComponent },
  { path: 'lab1-setup', component: Lab1SetupComponent },
  { path: 'lab2-pinmux', component: Lab2PinmuxComponent },
  { path: 'pinmux-tool', component: PinmuxToolComponent },
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]  
})
export class AppRoutingModule { }
