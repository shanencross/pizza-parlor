# Pizza Parlor

#### Learning project created for Epicodus school -- website for a pizza parlor

#### By Shanen Cross

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Description

A learning project created for the coding school Epicodus to practice constructors and prototypes.

Website for a pizza parlor, where users can select the size and toppings for a pizza they wish to order. The website will then display the final cost of the pizza, depending on the options selected.

## Setup/Installation Requirements

To use locally:
* Install git
* Clone this repository to a local directory using git
* Open _index.html_

To use the online version:
* Go to: https://shanencross.github.io/pizza-parlor/

To use the application:
* Select the size and toppings for the pizza from the form
* Click the submit button to see the final order price

## Tests

```
Describe: Pizza()
Test: Should construct a pizza object, using the given arguments as values for size and toppings, and calculate resulting price in dollars
Expect(new Pizza("extra-large", ["Pepperoni", "Anchovies", "Spinach"]).toEquals(Pizza {size: "extra-large", toppings: ["Pepperoni", "Anchovies", "Spinach"], price: 33.74 }))

Describe: Pizza.prototype.calculatePrice()
Test: Should calculate and return price of pizza using size and toppings properties, according to this formula:

Base prices:
Small: $13.99
Medium: $17.99
Large: $20.99
Extra-large: $23.99

Prices per topping:
Small: $2.50
Medium: $2.75
Large: $3.00
Extra-large: $3.25

Code: 
	let pizza = new Pizza("extra-large", ["Pepperoni", "Anchovies", "Spinach"]);
Expect(pizza.calculatePrice()).toEquals(33.74);

```

## Known Bugs

None.

## License

[MIT](LICENSE)

Copyright (c) 2021 Shanen Cross
