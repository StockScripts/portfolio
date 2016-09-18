import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import PortfolioComponent from './components/portfolio';
import AddNewStockComponent from './components/add-new-stock';
import AboutComponent from './components/about';

const routes: Routes = [
  { path: '', component: PortfolioComponent},
  { path: 'About', component: AboutComponent },
  { path: 'Add', component: AddNewStockComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

export const routeComponents: Function[] = routes.map(r => r.component);  