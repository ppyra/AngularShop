import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagepath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath:string, ingredient: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagepath = imagePath;
        this.ingredients = ingredient;
    }
}