import { BagBuilderPageComponent } from './components/bag-builder-page/bag-builder-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagResultsPageComponent } from './components/bag-results-page/bag-results-page.component';

const routes: Routes = [
  { path: 'build-bag', component: BagBuilderPageComponent },
  { path: 'bag-results', component: BagResultsPageComponent },
  { path: '', redirectTo: '/build-bag', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
