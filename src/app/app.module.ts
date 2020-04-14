import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CratesComponent } from './crates/crates.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShowCratesComponent } from './show-crates/show-crates.component';
import { ShowWishlistComponent } from './show-wishlist/show-wishlist.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';


const appRoutes: Routes = [
  
  {
    path: '',
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
  
    
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CratesComponent,
    WishlistComponent,
    ShowCratesComponent,
    ShowWishlistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
