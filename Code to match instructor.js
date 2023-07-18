//My Receipe Book *Working Code


class Ingredient {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    describe() {
        return `${this.name}: ${this.quantity} units.`
    }
}

class Dish {
    constructor(name) {
        this.name = name;
        this.ingredients = [];
    }
    
    // adds ingredient to the array within the Dish class but only if an instance
    //of the Ingredient class has been created.
    addIngredient(ingredient) {
        if (ingredient instanceof Ingredient) {
            this.ingredients.push(ingredient);
        }else{
            throw new Error(`You can only add an instance of Ingredient. 
            Argument is not an ingrediant: ${ingredient}`);
        }
    }

    describe() {
        return `${this.name} has ${this.ingredients.length} ingredients.`;
    }
}

class Menu {
    constructor() {
        this.dishes = [];
        this.selectedDishes = null;
    }

    start() { // entry point to application
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createDish();
                    break;
                case '2':
                    this.deleteDish();
                    break;
                case '3':
                    this.displayDishes();
                    break;
                case '4':
                    this.viewDish();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('See yah!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create New Dish Entry
        2) Delete Dish Entry
        3) Display All Dishes
        4) View Dish
        `);
    }

    showDishIngredients(dishIngredients) {
        return prompt(`
        0) Back
        1) Create New Ingredient
        2) Delete Ingredient
        -------------------------
        ${dishIngredients}
        `);
    }

    displayDishes() {
        let dishList = '';
        for (let i = 0; i < this.dishes.length; i++){
            dishList += i + ')' + this.dishes[i].name + '\n';
        }
        alert(dishList);
    }


        // Need to have the following methods create, view, and delete elements

    createDish() {
        let name = prompt(`Enter name for new Dish: `);
        this.dishes.push(new Dish(name));
    }

    deleteDish() {
        let index = prompt(`Enetr index of the Dish you want to delete: `);
        if (index > -1 && index < this.dishes.length) {
            this.dishes.splice(index, 1);
        }
    }


    //this snipped pulls up the pop up window displaying all the ingredients in a Dish
    viewDish() {
        let index = prompt("Enter the index of the Dish you want to view: ");
        if (index > -1 && index < this.dishes.length) {
            this.selectedDishes = this.dishes[index];
            // The below Discription variable is used to display the ingredients for each dish
            let description = 'Dish Name: ' + this.selectedDishes.name + '\n';
            //This line references back to the descrive function in the class Dish 
            description += ' ' + this.selectedDishes.describe() + '\n';
            //The below For loop will print out a list of the ingredients wihtin the selected Dish
            for (let i = 0; i < this.selectedDishes.ingredients.length; i++) {
                description += i + ') ' + this.selectedDishes.ingredients[i].describe() + '\n';
            }
            let selection1 = this.showDishIngredients(description);
            switch (selection1) {
                case '1':
                    this.createIngredient();
                    break;
                case '2':
                    this.deleteIngredient();
            }
        }
    }

    createIngredient() {
        let name = prompt(`Enter name for new ingredient: `);
        let quantity = prompt(`Enter quantity for new ingredient: `);
        this.selectedDishes.ingredients.push(new Ingredient(name, quantity));
    }

    deleteIngredient() {
        let index = prompt(`Enter the index of the ingredient you want to delete: `);
        if (index > -1 && index < this.selectedDishes.ingredients.length) {
            this.selectedDishes.ingredients.splice(index, 1);
        }
    }

}

let menu = new Menu();
menu.start();