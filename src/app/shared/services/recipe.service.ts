import {Recipe} from "../models/recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../models/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subject} from "rxjs/Subject";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class RecipeService{
  recipeEvent = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('شرکت الجی',
      'یک توضیح تست برای شرکت الجی  قرار می دهیم',
      'https://www.beytoote.com/images/stories/news/99/03/9903-76t570.jpg',
        [new Ingredient('تلوزیون', 1), new Ingredient('ال سی دی',3)]),
    new Recipe('شرکت سونی',
      'یک توضیح تست برای دستور شرکت سونی تغییرات بوجود آمده قرار می دهیم',
      'https://www.beytoote.com/images/stories/news/99/01/99-01-42enew550.jpg',
      [new Ingredient('تاچ ', 1), new Ingredient('دوربین',2)]),
 
  ]

  constructor(private shoppingListService: ShoppingListService, private httpClient: HttpClient){}

  getRecipe(){
    return this.recipes.slice()

   
  }
  getRecipeDetail(index: number){
    return this.recipes[index]
  }
  addRecipeToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addFromRecipeShoppingList(ingredients)

  }
  addRecipe(newRecipe: Recipe){
    this.recipes.push(newRecipe)
    this.recipeEvent.next(this.recipes.slice())
    // const body = ingredients;
    // return this.httpClient.post('http://www.roxo.ir/recpies', body)
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeEvent.next(this.recipes.slice())

  }
  deleteRecipe(index: number){
    this.recipes.splice(index,1)
    this.recipeEvent.next(this.recipes.slice())
 
  }
}