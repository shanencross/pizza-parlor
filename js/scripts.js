function Pizza(size, toppings) {
	this.size = size;
	this.toppings = toppings;
	this.price = this.calculatePrice();
}

Pizza.prototype.calculatePrice = function() {
	const basePrices = {
		"small": 13.99,
		"medium": 17.99,
		"large": 20.99,
		"extra-large": 23.99
	}

	const toppingPrices = {
		"small": 2.50,
		"medium": 2.75,
		"large": 3.00,
		"extra-large": 3.25
	}

	const basePrice = basePrices[this.size];
	const toppingPrice = this.toppings.length * toppingPrices[this.size];
	const price = (basePrice + toppingPrice).toFixed(2);
	return price;
}