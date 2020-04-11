import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CratesComponent } from './crates/crates.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShowCratesComponent } from './show-crates/show-crates.component';
import { ShowWishlistComponent } from './show-wishlist/show-wishlist.component';


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
    path:"show-crates",
    component:ShowCratesComponent,
    data: { title: 'show-crates'}
  },
  {
    path:"wishlist",
    component: WishlistComponent, 
    data: { title: 'wishlist'}
  },
  {
    path: "show-wishlist",
    component:ShowWishlistComponent,
    data: { title:'show-wishlist' }
  },
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
