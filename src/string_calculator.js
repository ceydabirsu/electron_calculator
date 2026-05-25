// StringCalculator.js
function StringCalculator() { }
StringCalculator.prototype.add = function (string_numbers) {
	let sum = 0;
	for (const num_str of string_numbers.split(',')) {
		const num = parseInt(num_str);
		if (!isNaN(num)) {
			sum += num;
		}
	}
	return sum;
};
