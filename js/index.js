$(document).ready(function() {
	$("form#order-form").submit(function(event) {
		event.preventDefault();

		const size = $("#order-form #pizza-size").val();
		
		const toppingElements = $("#order-form input:checkbox[name=toppings]:checked");
		let toppings = [];
		for (toppingElement of toppingElements) {
			toppings.push(toppingElement.value);
		}

		let pizza = new Pizza(size, toppings);

		$("#order-placement").hide();
		$("#order-confirmation").show();
		$("#order-confirmation #pizza-price").text("$" + pizza.price);
	})

	$("button#new-order").click(function(event) {
		$("#order-placement").show();
		$("#order-confirmation").hide();

		$("form#order-form")[0].reset();
	})
})