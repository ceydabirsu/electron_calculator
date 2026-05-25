describe('Electrons', function () {
	beforeEach(function() {
		calculator = new ElectronsCalculator();
	});
    it('returns 6 for [1, 2, 3, 4, 5]', function () {
    expect(calculator.aroundTheCores([1, 2, 3, 4, 5])).toBe(6);
});
});
