function Pizza(size, toppings) {
	this.size = size;
	this.toppings = toppings;
	this.price = this.calculatePrice();
}

Pizza.prototype.calculatePrice = function() {
	return 0;
}