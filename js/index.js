$(document).ready(function() {
	$("#order-form").submit(function(event) {
		event.preventDefault();

		// Get and store user input for pizza size and toppings
		const size = $("#order-form #pizza-size").val();
		const toppingElements = $("#order-form input:checkbox[name=toppings]:checked");
		let toppings = [];
		for (toppingElement of toppingElements) {
			toppings.push(toppingElement.value);
		}

		let pizza = new Pizza(size, toppings);

		displayOrderConfirmation(pizza);
	})

	$("button#new-order").click(resetForNewOrder);
})

function displayOrderConfirmation(pizza) {
	$("#intro").hide();
	$("#order-placement").hide();
	$("#order-confirmation").show();
	$("#order-confirmation #pizza-price").text("$" + pizza.price);
}

function resetForNewOrder() {
	$("#intro").show();
	$("#order-placement").show();
	$("#order-confirmation").hide();
	$("#order-form")[0].reset();
}