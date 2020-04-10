import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CratesComponent } from './crates/crates.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent, 
    data: { title: 'home-page'}
  },
  {
    path: "crates",
    component:CratesComponent,
    data: { title: 'crates'}
  },
  {
    path:"wishlist",
    component: WishlistComponent, 
    data: { title: 'wishlist'}
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
