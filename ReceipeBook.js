//Receipe Book

class Ingredient {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    describe() { 
        return `You will require ${this.quantity} of ${this.name}`
    }
}

class Dish {
    constructor(name){
        this.name = name;
        this.ingredients = [];
    }

    addIngredient(ingredient){
        this.ingredients.push(ingredient);
    }

    describe(){
        return `${this.name} has ${this.ingredients.length} ingredients.`
    }
}

class Menu {
    constructor (){
        this.dishList = [];
        this.selectedDish = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createDish()
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
            }
        }
    }

    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Create New Dish Entry
        2) Delete Dish Entry
        3) Display All Dishes
        4) View Dish
        `);
    }

    showDishIngredients(dishIngredients){
        return prompt(`
        0) Back
        1) Create New Ingredient
        2) Delete ingredient
        -------------------------
        ${dishIngredients}
        `)
    }

    displayDishes(){
        let listOfDishes = '';
        for (let i = 0 ; i < this.dishList.length; i++){
            listOfDishes += `${i}) ${this.dishList[i].name} \n`;
        }
        alert(listOfDishes);
    }

    // Need to have the following methods create, view, and delete elements

    createDish() {
        let name = prompt(`Enter name for new Dish: `);
        this.dishList.push(new Dish(name));
    }

    deleteDish() {
        let index = prompt(`Enter index of the Dish you want to delete: `);
        this.dishList.splice(index, 1);
    }

    viewDish() {
        let indexOfDish = prompt(`Enter the index of the dish you want to view: `);
        this.selectedDish =  this.dishList[indexOfDish];
        let description = `Dish Name: ${this.dishList[indexOfDish].name} \n`;
        description += `${this.selectedDish[indexOfDish].describe()} \n`;
        for (let i = 0; i < this.selectedDish.ingredients.length; i++){
            description += `${i}) ${this.selectedDish.ingredient[i].describe()}`
        }
        let selection1 = this.showDishIngredients(description);
        switch (selection1) {
            case '1':
                this.createIngredient();
                break;
            case '1' :
                this.deleteIngredient();
                break;
        }
    }

    createIngredient() {
        let name = prompt(`Enter name of new Ingredient: `);
        let quantity = prompt(`Enter quantity required of new Ingredient: `)
        this.dishList.ingredients.push(new Ingredient(name, quantity));
    }

    deleteIngredient() {
        let index = prompt(`Enter the index of the ingredient you would like to delete: `);
        this.dishList.ingredients.splice(index,1);
    }


}

let menu = new Menu();

menu.start();
