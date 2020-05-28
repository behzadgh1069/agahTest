import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import {ShoppingListService} from "./shared/services/shopping-list.service";
import {RoutingModule} from "./app-routing.module";
import {RecipeService} from "./shared/services/recipe.service";
import {HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from "./shared/services/auth.service";
import {SharedModule} from "./shared/modules/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
