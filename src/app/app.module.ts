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

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


    


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CratesComponent,
    WishlistComponent,
    ShowCratesComponent,
    ShowWishlistComponent, 
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule, 
    AppRoutingModule
    
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
