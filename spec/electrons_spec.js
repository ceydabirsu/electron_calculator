describe('Electrons', function () {
	beforeEach(function() {
		calculator = new ElectronsCalculator();
	});

    it('returns 6 for [1, 2, 3, 4, 5]', function () {
    expect(calculator.aroundTheCores([1, 2, 3, 4, 5])).toBe(6);
    });

    it('returns 4 for [2, 2, 3, 3]', function () {
    expect(calculator.aroundTheCores([2, 2, 3, 3])).toBe(4);
    });

    it('returns 2 for [6, 6, 4, 4, 1, 3]', function () {
    expect(calculator.aroundTheCores([6, 6, 4, 4, 1, 3])).toBe(2);
    });

});
