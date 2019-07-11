import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'bands',
    loadChildren: () => import('../bands/bands.module').then(m => m.BandsModule)
  },
  {
    path: 'band/:id',
    loadChildren: () => import('../band/band.module').then(m => m.BandModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'bands' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
