$(document).ready(function() {
	$("#order-form").submit(function(event) {
		event.preventDefault();

		const size = $("#order-form #pizza-size").val();
		const toppingElements = $("#order-form input:checkbox[name=toppings]:checked");

		let toppings = [];
		for (toppingElement of toppingElements) {
			toppings.push(toppingElement.value);
		}
	})
})