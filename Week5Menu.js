//Receipe Book

// Creating a class named Ingredient with a constructor that takes in parameter's name and quantity.
// Also has a method name describe which returns the name and quantity of an ingredient in a specific formart.
class Ingredient {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    describe() { 
        return `${this.name}: ${this.quantity} units.`
    }
}

// Creating a class named Dish with a constructor that takes in the parameter name. Also adding an empty array which will house the ingredients of each Dish.
// Also has 2 methods; addIngredient and describe 
// addIngredient pushes the whatever argument is being passed through parameter ingredient to the ingredients array under the Dish class.
// describe which returns the the length of the ingredients array in a specific formart. The length of the array tells us how many ingredients are in the selected dish.
class Dish {
    constructor(name){
        this.name = name;
        this.ingredients = [];
    }

    addIngredient(ingredient){
        this.ingredients.push(ingredient);
    }

    describe(){
        return `Your dish has ${this.ingredients.length} ingredients.`
    }
}

class Menu {
    constructor (){
        this.dishList = [];
        this.selectedDish = null;
    }
    //the start method will initiate the showMainMenuOptions method and iterate through it until one of the cases is met. If the selection is 0 then the loop ends and the alert function displays a message.
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
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!')
    }
    //This method only returns the string usign a template literal.
    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Create New Dish Entry
        2) Delete Dish Entry
        3) Display All Dishes
        4) View Dish
        `);
    }
    //showDishIngredients takes in one parameter and returns the string and the argument beign passed through using template literal.
    showDishIngredients(dishIngredients){
        return prompt(`
        0) Back
        1) Create New Ingredient
        2) Delete ingredient
        -------------------------
        ${dishIngredients}
        `)
    }
    //displayDishes is a method that iterates through the dishList array in the Menu class and addes the index and the dish name at an index to the declared listOfDishes empty string.
    //once the for loop ends it will use the alert function to display the full lisOfDishes string. 
    displayDishes(){
        let listOfDishes = '';
        for (let i = 0 ; i < this.dishList.length; i++){
            listOfDishes += `${i}) ${this.dishList[i].name} \n`;
        }
        alert(listOfDishes);
    }

    // Need to have the following methods create, view, and delete elements

    //createDish prompts for a new name. The new name is used to create an instance of the Dish class and gets pushed to the dishList array in the Menu class.
    createDish() {
        let name = prompt(`Enter name for new Dish: `);
        this.dishList.push(new Dish(name));
    }
    //createDish method prompts for the index to be used. We assign this input to the index variable which is then used as a reference for the splice method. Splice allows us to delete an element starting at a specific index
    //and also tell it how many elemets to delete from that index. In this case we only want to delete one at a time.
    deleteDish() {
        let index = prompt(`Enter index of the Dish you want to delete: `);
        this.dishList.splice(index, 1);
    }
    //viewDish is a method that ultimetly displays the Dish name and its ingredients. This "Window" also gives you two options, create or delete an ingredient, which is accessed through the following two methods;
    //createIngredient and deleteIngredient.
    //The for look iterates through the selected dishe's ingredients list and adds it tot the description variable. In this method we have assigned the element at index "indexOfDish" within the dishList to this.selectedDish
    //to shorten the syntax and make it more readable.
    viewDish() {
        let indexOfDish = prompt(`Enter the index of the dish you want to view: `);
        this.selectedDish =  this.dishList[indexOfDish];
        let description = `Dish Name: ${this.selectedDish.name} \n \n`;
        description += `${this.selectedDish.describe()} \n`;
        for (let i = 0; i < this.selectedDish.ingredients.length; i++){
            description += `-${this.selectedDish.ingredients[i].describe()} \n`
        }
        let selection1 = this.showDishIngredients(description);
        switch (selection1) {
            case '1':
                this.createIngredient();
                break;
            case '2' :
                this.deleteIngredient();
                break;
        }
    }
    //createIngredient method assigned the input from the prompts to its respective variable; name and quantity.
    //In order to create a new ingredient we invoke this method and push the a new instance of Ingredient passing through the given arguments for name and quantity.
    createIngredient() {
        let name = prompt(`Enter name of new Ingredient: `);
        let quantity = prompt(`Enter quantity required of new Ingredient: `)
        this.selectedDish.ingredients.push(new Ingredient(name, quantity));
    }
    //deleteIngredient similar to deleteDish... this method prompts for the index to be used. We assign this input to the index variable which is then used as a reference for the splice method. 
    //Splice allows us to delete an element starting at a specific index and also tell it how many elemets to delete from that index. In this case we only want to delete one at a time.
    deleteIngredient() {
        let index = prompt(`Enter the index of the ingredient you would like to delete: `);
        this.selectedDish.ingredients.splice(index,1);
    }


}

let menu = new Menu();

menu.start();
