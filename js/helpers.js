function roundToFixedPoint(num, decimalPlace) {
	return Math.round(num * Math.pow(10, decimalPlace)) / Math.pow(10, decimalPlace); 
}