import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recpies', loadChildren: './recpies/recipe.module#RecipeModule'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
]


@NgModule({
  imports : [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})


export class RoutingModule{}