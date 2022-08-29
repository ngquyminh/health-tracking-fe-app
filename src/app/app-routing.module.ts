import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ChartComponent } from './pages/chart/chart.component';
import { DataVisualizationComponent } from './components/data-visualization/data-visualization.component';
import { DataPercentageComponent } from './components/data-percentage/data-percentage.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'data-visual', component: DataVisualizationComponent },
  { path: 'data-percentage', component: DataPercentageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
