import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CratesComponent } from './crates/crates.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShowCratesComponent } from './show-crates/show-crates.component';
import { ShowWishlistComponent } from './show-wishlist/show-wishlist.component';
import { CreditsContactMeComponent } from './credits-contact-me/credits-contact-me.component';

const appRoutes: Routes = [
  
   
    {
        path: 'home-page',
        component: HomePageComponent, 
       
    },
    {
      path: 'crates',
      component:CratesComponent,
      
    },
    {
      path:'show-crates',
      component:ShowCratesComponent,
      
    },
    {
      path:'wishlist',
      component: WishlistComponent, 
      
    },
    {
      path: 'show-wishlist',
      component:ShowWishlistComponent,
      
    },
    {
      path: 'credits-contact-me',
      component:CreditsContactMeComponent,
      
    },
    
    {
        path: '',
        component: HomePageComponent, 
       
      },
    
      
  ];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 