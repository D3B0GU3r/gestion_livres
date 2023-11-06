
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreListComponent } from './livre-list/livre-list.component';
import { LivreDetailsComponent } from './livre-details/livre-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'livres', pathMatch: 'full' },
  { path: 'livres', component: LivreListComponent },
  { path: 'livre/:id', component: LivreDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
