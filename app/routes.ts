import {provideRouter} from '@angular/router';

import PortfolioComponent from './components/portfolio';
import AddNewStockComponent from './components/add-new-stock';
import AboutComponent from './components/about';

export default [
  provideRouter([
    {path: '', component: PortfolioComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Add', component: AddNewStockComponent}
  ])
];